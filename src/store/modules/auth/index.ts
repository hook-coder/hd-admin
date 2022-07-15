import { unref } from "vue";
import { createStore } from "vuex";
// import { router } from "@/router";

//抽离 这里的枚举角色
enum EnumUserRole {
  super = "超级管理员",
  admin = "管理员",
  user = "普通用户",
}
type RoleType = keyof typeof EnumUserRole;

interface AuthState {
  //抽离出去AuthState.UserInfo
  userInfo: {
    userId: string;
    userName: string;
    userRole: RoleType;
  };
  token: string;
  loginLoading: boolean;
}

export const useAuthStore = createStore({
  state: (): AuthState => ({
    //抽离getUserInfo() 假设的用户
    userInfo: {
      userId: "001",
      userName: "wave",
      userRole: "super",
    },
    //抽离getToken() token
    token: "这里是一个token的返回数据",
    loginLoading: false,
  }),
  getters: {
    //是否登录
    isLogin(state) {
      return Boolean(state.token);
    },
  },
  mutations: {},
  actions: {
    resetAuthStore() {
      console.log("重置路由");
    },
  },
});
