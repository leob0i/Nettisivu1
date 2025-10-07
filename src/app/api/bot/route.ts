// src/app/api/bot/route.ts
import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export const runtime = "nodejs";

// Vaihda /webchat siihen polkuun, jota bottisi Renderissä odottaa
const UPSTREAM = `${env.BOT_BASE_URL}/webchat`;

export async function POST(req: Request) {
  try {
    const body = await req.text(); // välitetään runko sellaisenaan
    const r = await fetch(UPSTREAM, {
      method: "POST",
      headers: { "Content-Type": req.headers.get("content-type") || "application/json" },
      body,
    });

    const text = await r.text();
    const ct = r.headers.get("content-type") || "application/json";
    return new NextResponse(text, { status: r.status, headers: { "Content-Type": ct } });
  } catch (err) {
    console.error("Bot proxy error:", err);
    return NextResponse.json({ ok: false, error: "Bot backend unreachable" }, { status: 502 });
  }
}
