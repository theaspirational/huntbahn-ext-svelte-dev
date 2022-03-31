import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { crx } from "rollup-plugin-chrome-extension";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import manifest from "./manifest.json";
import commonjs from "@rollup/plugin-commonjs";
import sveltePreprocess from "svelte-preprocess";

export const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  // root: ".",
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: isDev ? "inline" : false,
    // https://developer.chrome.com/docs/webstore/program_policies/#:~:text=Code%20Readability%20Requirements
    // terserOptions: {
    //   mangle: false,
    // },
  },
  resolve: { dedupe: ["svelte"] },
  plugins: [
    crx({ manifest, contentScripts: { preambleCode: false } }),
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: isDev,
      },
    }),
    postcss({ minimize: !isDev }),
    commonjs(),
    typescript({ sourceMap: false }),
  ],
});
