import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import copy from "@guanghechen/rollup-plugin-copy";
import css from "rollup-plugin-import-css";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
export default [
  {
    input: {
      index: "src/js/index.ts",
      theme: "src/js/theme.ts",
      projects: "src/js/projects.ts",
      "copy-email": "src/js/copy-email.ts",
      "project-animation": "src/js/project-animation.ts",
      "hero-animation": "src/js/hero-animation.ts",
    },
    output: {
      dir: "dist/js",
      format: "es",
    },

    plugins: [
      typescript(),
      nodeResolve({ preferBuiltins: false }),
      commonjs(),
      css({ inject: true }),
      copy({
        targets: [
          { src: "src/pages/index.html", dest: "dist/pages/" },
          { src: "src/images", dest: "dist" },
        ],
      }),
      serve({
        open: true,
        contentBase: ["dist", "dist/pages"],
        host: "localhost",
        port: "3000",
      }),
      livereload({
        watch: "dist",
      }),
    ],
  },
  {
    input: "src/css/tailwind.css",
    output: {
      dir: "dist/css",
    },
    plugins: [
      postcss({
        plugins: [tailwindcss(), autoprefixer()],
        extract: "tailwind.css", // Extract the processed CSS to a file
        minimize: true, // Minify the CSS
      }),
    ],
  },
];
