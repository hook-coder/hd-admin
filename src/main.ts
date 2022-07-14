/*
 * @Author: starry
 * @Description: 
 * @LastEditors: starry
 * @LastEditTime: 2022-07-14 17:27:36
 */
import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from '@/router/index';
import store from '@/store/index';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount("#app");
