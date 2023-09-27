import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";
import { base64 } from "rollup-plugin-base64";

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      base64({
        include: "src/BlokdotsSocketIOServer/webserver/**/*",
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
    ],
    external: ["events", "socket.io", "ws"],
  },
  {
    input: "types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    external: [/\.s?css$/],
    plugins: [dts.default()],
  },
];

export default config;
