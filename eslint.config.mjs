import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import nextCoreWebVitalsConfig from "eslint-config-next/core-web-vitals";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Override all rules to be warnings instead of errors
  ...Object.fromEntries(
    Object.keys({
      ...nextCoreWebVitalsConfig.rules,
      ...typescriptEslintPlugin.rules,
    }).map((rule) => [rule, "warn"])
  ),
];

export default eslintConfig;
