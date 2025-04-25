import nextPlugin from "@next/eslint-plugin-next";

// @ts-check


/** @type {import('eslint').Linter.Config[]} */
const config = [
    {
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
        },
    },
    // Add any additional configurations or overrides here
];

export default config;