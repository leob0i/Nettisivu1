import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${SITE.brand} – ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.brand} – ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className={`${inter.className} bg-gradient-to-b from-white to-slate-50 text-slate-900`}>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
