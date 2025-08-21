export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RESEND_API_KEY: string;
      CONTACT_TO: string;
      CONTACT_FROM: string;
    }
  }
}
