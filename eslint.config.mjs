import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Pre-existing Toilet Plus design-system asset library at repo root —
    // not part of this Next.js app.
    "_ds_bundle.js",
    "components/**",
    "ui_kits/**",
    "guidelines/**",
  ]),
]);

export default eslintConfig;
