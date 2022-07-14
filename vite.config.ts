/*
 * @Author: starry
 * @Description: 
 * @LastEditors: starry
 * @LastEditTime: 2022-07-14 17:24:20
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  resolve: {
    // 配置别名
    alias: {
      "@": resolve(__dirname, "src"),
    }
  }
});
