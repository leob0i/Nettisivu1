import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import { SITE_URL } from "@/lib/env";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE.brand} – ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.brand} – ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
  },
  metadataBase: new URL(SITE_URL),
   alternates: {
    languages: {
      fi: "/",
      en: "/en",
    },
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className={`${inter.className} bg-gradient-to-b from-white to-slate-50 text-slate-900`}>

        <Header />
        {children}
        <Footer />{/* CHAT WIDGET – minimirunko */}
<div id="chat-widget">
  <button id="chat-toggle" aria-expanded="false">💬</button>
  <div id="chat-box">
    <div id="chat-header">Leo Digital botti🤖</div>
    <div id="chat-messages"></div>
    <div id="chat-input-area">
      <input id="chat-input" placeholder="Kirjoita viesti…" />
      <button id="send-chat">Lähetä</button>
    </div>
  </div>
</div>

<Script src="/chat.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
