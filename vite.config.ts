import { URL, fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
//import eslint from "vite-plugin-eslint"; // TODO Read comment below.

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    //eslint() // TODO Why app not start with this enabled?
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
