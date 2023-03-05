import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";

// Element-Plus按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "RPA大数据实验系统",
        },
      },
    }),
    // Element-Plus按需导入
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/styles/global.less";',
      },
      scss: {
        //自定义的ElementPlus主题文件
        additionalData: `@use "@/styles/global.scss" as *;`,
      },
    },
  },
});
