import { setLocal, getLocal, removeLocal } from "../storage";

export enum EnumStorageKey {
  /** 用户token */
  "token" = "__TOKEN__",
  /** 用户刷新token */
  "refresh-token" = "__REFRESH_TOKEN__",
  /** 用户信息 */
  "user-info" = "__USER_INFO__",
}

/** 设置token*/
const setToken = (token: string) => {
  setLocal(EnumStorageKey.token, token);
};

/** 获取token*/
const getToken = () => {
  return getLocal<string>(EnumStorageKey.token) || "";
};

/** 移除token*/
const removeToken = () => {
  removeLocal(EnumStorageKey.token);
};

/** 获取refresh token */
const getRefreshToken = () => {
  return getLocal<string>(EnumStorageKey["refresh-token"]) || "";
};

/** 设置refresh token */
const setRefreshToken = (token: string) => {
  setLocal(EnumStorageKey["refresh-token"], token);
};

/** 移除refresh token */
const removeRefreshToken = () => {
  removeLocal(EnumStorageKey["refresh-token"]);
};

export { setToken, getToken, removeToken, getRefreshToken, setRefreshToken };
