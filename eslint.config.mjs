// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Next.jsin suositukset + TypeScript-säädöt
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // TÄRKEÄ: älä linttaa buildia tai node_modulesia
  {
    ignores: ["**/.next/**", "node_modules/**"],
  },
];
