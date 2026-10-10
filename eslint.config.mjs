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
  ]),
  {
    rules: {
      // Project sengaja memakai <img> agar URL gambar dummy (placeholder eksternal)
      // dapat diganti hanya dengan mengubah satu string di data/*.ts.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
