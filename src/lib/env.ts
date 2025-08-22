// src/lib/env.ts

// Lista vaadittavista muuttujista — käytämme tätä myös AJONAJASSA
const required = ["RESEND_API_KEY", "CONTACT_TO", "CONTACT_FROM"] as const;

// Ajonaikainen tarkistus: kaada build/dev heti, jos joku puuttuu
for (const key of required) {
  const v = process.env[key];
  if (!v || v.trim() === "") {
    throw new Error(
      `[ENV] Missing ${key}. Lisää arvo .env.local -tiedostoon tai hostin env-asetuksiin.`
    );
  }
}

// Vientiin vain valmiiksi tarkistetut arvot
export const env = {
  RESEND_API_KEY: process.env.RESEND_API_KEY!,
  CONTACT_TO: process.env.CONTACT_TO!,
  CONTACT_FROM: process.env.CONTACT_FROM!,
  BOT_BASE_URL: process.env.BOT_BASE_URL!, // ← tämä lisäys
} as const;
