const ip = require("ip");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import { svgBuilder } from "./src/plugin/icons/svgBuilder";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const path = require("path");

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": _resolve("src"),
    },
  },
  plugins: [
    vue(),
    svgBuilder("./src/plugin/icons/svg/"),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    /* styleImport({
      libs: [
        {
          libraryName: "element-plus",
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        },
      ],
    }), */
  ],
  server: {
    port: 9000,
    cors: true,
    /* proxy: {
      "/epgms": {
        target: "http://10.10.8.14:9999/mock/5f23d33facd7311a719430ed/epgms/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/epgms/, ""),
      },
    }, */
  },
});
