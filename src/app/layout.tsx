import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE.brand} – ${SITE.tagline}`,
  description: SITE.description,

  // --- SEO-lisäykset ---
  metadataBase: new URL("https://www.leodigital.fi"),
  alternates: { canonical: "https://www.leodigital.fi/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `${SITE.brand} – ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
    url: "https://www.leodigital.fi/",
    siteName: SITE.brand,
    images: ["/logo.png"], // resolvoituu metadataBaseen
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.brand} – ${SITE.tagline}`,
    description: SITE.description,
    images: ["/logo.png"],
  },

  // --- FAVICONIT (päivitetty) ---
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  // --- /FAVICONIT ---
  // --- /SEO-lisäykset ---
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className={`${inter.className} bg-gradient-to-b from-white to-slate-50 text-slate-900`}>

        <Header />
        {children}
        <Footer />

        {/* CHAT WIDGET – minimirunko */}
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

        {/* Organization-schema logolla (näkyvyys Googleen) */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.brand,
              url: "https://www.leodigital.fi/",
              logo: "https://www.leodigital.fi/logo.png",
            }),
          }}
        />

        <Script src="/chat.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
