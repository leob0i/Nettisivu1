// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { env } from "@/lib/env"; // ← käytössä

export const runtime = "nodejs";

const resend = new Resend(env.RESEND_API_KEY);
const TO = env.CONTACT_TO;
const FROM = env.CONTACT_FROM;

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  topic?: string;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json().catch(() => ({}))) as Payload;
    const { name, email, message, topic } = data || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Puuttuva kenttä" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: `Leo Digital <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject: `Uusi yhteydenotto: ${topic || "Tarjouspyyntö"}`,
      text:
        `Nimi: ${name}\n` +
        `Sähköposti: ${email}\n` +
        (topic ? `Aihe/Paketti: ${topic}\n` : "") +
        `\nViesti:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Lähetys epäonnistui" },
      { status: 500 }
    );
  }
}
