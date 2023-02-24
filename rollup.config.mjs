import dts from "rollup-plugin-dts";

const config = [
  {
    input: "types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "cjs" }],
    plugins: [dts()],
    external: ["events"],
  },
];

export default config;
