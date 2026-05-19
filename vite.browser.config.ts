import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// All Node.js-only modules — marked external so Rollup tree-shakes their import chains
const nodeOnlyExternals = [
  "serialport",
  "@serialport/parser-readline",
  "@serialport/parser-delimiter",
  "@serialport/bindings-cpp",
  "socket.io",
  "socket.io-client",
  "ws",
  "engine.io",
  "fs",
  "path",
  "os",
  "http",
  "https",
  "net",
  "tls",
  "crypto",
  "stream",
  "zlib",
  "events",
  "url",
  "child_process",
  "timers",
  "node:fs",
  "node:path",
  "node:url",
  "node:os",
  "node:crypto",
  "node:module",
  "node:net",
  "node:tls",
  "node:http",
  "node:https",
  "node:stream",
  "node:events",
  "@blokdots/board-configurations",
];

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: false,
      outDir: "dist",
      rollupTypes: false,
      tsconfigPath: "./tsconfig.json",
      include: ["src/**/*.ts"],
      exclude: ["**/*.test.ts", "**/*.spec.ts"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "browser.mjs",
    },
    rollupOptions: {
      external: nodeOnlyExternals,
      treeshake: {
        // Treat all modules as side-effect free → full tree-shaking
        // eliminates the entire Board → serialport import chain
        moduleSideEffects: false,
      },
    },
    emptyOutDir: false,
    target: "esnext",
    minify: false,
    sourcemap: true,
  },
});
