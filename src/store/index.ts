// /*
//  * @Author: starry
//  * @Description: VUEX 配置
//  * @LastEditors: starry
//  * @LastEditTime: 2022-07-14 17:27:04
//  */

// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
// });

import type { App } from "vue";
import { createStore } from "vuex";

export function setupStore(app: App) {
  const store = createStore({});
  app.use(store);
}

export * from "./modules";
