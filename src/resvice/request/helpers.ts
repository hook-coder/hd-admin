import type { AxiosRequestConfig } from "axios";
import { fetchUpdateToken } from "../api";
import { useAuthStore } from "@/store";
import { getRefreshToken, setToken, setRefreshToken } from "@/utils";

//token失效 刷新token
export async function handleRefreshToken(axiosConfig: AxiosRequestConfig) {
  const refreshToken = getRefreshToken();
  const { data } = await fetchUpdateToken(refreshToken);

  if (data) {
    setToken(data.token);
    setRefreshToken(data.getRefreshToken);
    const config = { ...axiosConfig };
    if (config.headers) {
      config.headers.Authrization = data.token;
    }
    return config;
  }

  useAuthStore.dispatch("resetAuthStore");
  return null;
}
