import fs from "fs";
import { resolve, dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: "dist",
      rollupTypes: false, // Disable type bundling due to external dependencies
      tsconfigPath: "./tsconfig.json",
      exclude: ["**/*.test.ts", "**/*.spec.ts"],
    }),
    // Custom plugin to copy webserver files
    {
      name: "copy-webserver-files",
      writeBundle() {
        const srcDir = path.resolve(
          __dirname,
          "src/integrations/BlokdotsSocketIOServer/webserver"
        );
        const destDir = path.resolve(__dirname, "dist/webserver");

        // Create dest directory if it doesn't exist
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true });
        }

        // Copy all files
        const files = fs.readdirSync(srcDir);
        files.forEach((file: string) => {
          const srcFile = path.join(srcDir, file);
          const destFile = path.join(destDir, file);
          if (fs.statSync(srcFile).isFile()) {
            fs.copyFileSync(srcFile, destFile);
            console.log(`Copied ${file} to dist/webserver`);
          }
        });
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        "events",
        "socket.io",
        "ws",
        "fs",
        "path",
        "http",
        "url",
        "os",
        "node:fs",
        "node:path",
        "node:url",
        "node:os",
        // Serialport uses native bindings and must be external
        "serialport",
        "@serialport/bindings-cpp",
        "@serialport/parser-readline",
        "@serialport/parser-delimiter",
      ],
    },
    target: "node20",
    minify: false,
  },
});
