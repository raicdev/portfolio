import { builtinModules } from "node:module";
import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const nodeBuiltins = Array.from(
  new Set(
    builtinModules.flatMap((mod) =>
      mod.startsWith("node:") ? [mod, mod.slice("node:".length)] : [mod, `node:${mod}`],
    ),
  ),
);

export default defineConfig(({ mode }) => ({
  plugins: [
    ...(mode === "development" ? [devtools()] : []),
    nitro(),
    {
      name: "nitro-node-builtins",
      configEnvironment(name, config) {
        if (name !== "nitro") {
          return;
        }
        config.resolve ??= {};
        config.resolve.builtins = nodeBuiltins;
      },
    },
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
        autoStaticPathsDiscovery: true,
        failOnError: true,
      },
    }),
    viteReact(),
  ],
}));
