import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import zip from "rollup-plugin-zip";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import typescript from "@rollup/plugin-typescript";
import {
  chromeExtension,
  simpleReloader,
} from "rollup-plugin-chrome-extension";
import { emptyDir } from "rollup-plugin-empty-dir";

export const isDev = process.env.NODE_ENV !== "production";
const moduleExclude = (match) => {
  const m = (id) => id.indexOf(match) > -1;
  return {
    name: `exclude-${match}`,
    resolveId(id) {
      if (m(id)) return id;
    },
    load(id) {
      if (m(id)) return `export default {}`;
    },
  };
};

export default {
  input: "src/manifest.json",
  output: {
    globals: {
      // buffer: "Buffer",
      "gun/gun": "Gun",
      "gun/sea": "SEA",
    },
    external: [
      "buffer",
      "gun",
      "gun/gun",
      "gun/sea",
      "gun/sea.js",
      "gun/lib/then",
      "gun/lib/webrtc",
      "gun/lib/radix",
      "gun/lib/radisk",
      "gun/lib/store",
      "gun/lib/rindexed",
    ],
    sourcemap: isDev ? "inline" : false,
    dir: "dist",
    format: "module",
  },
  plugins: [
    // always put chromeExtension() before other plugins
    chromeExtension(),
    simpleReloader(),
    moduleExclude("text-encoding"),
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        // enable run-time checks when not in production
        dev: isDev,
      },
    }),
    postcss({ minimize: !isDev }),
    resolve({
      dedupe: ["svelte"],
      browser: true,
      preferBuiltins: false,
    }),
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    commonjs({
      dynamicRequireTargets: [
        // include using a glob pattern (either a string or an array of strings)
        // "node_modules/buffer/*.js",
        // exclude files that are known to not be required dynamically, this allows for better optimizations
      ],
    }),
    typescript({ sourceMap: isDev ? true : false }),
    // Empties the output dir before a new build
    emptyDir(),
    // If we're building for production, minify
    !isDev && terser(),
    // Outputs a zip file in ./releases
    !isDev && zip({ dir: "releases" }),
  ],
};
