import type { AxiosInstance, AxiosRequestConfig } from "axios";
import CustomAxiosInstance from "./instance";

type RequestMethods = "get" | "post" | "put" | "delete";
interface RequestParam {
  url: string;
  method?: RequestMethods;
  data?: any;
  axiosConfig?: AxiosRequestConfig;
}

/**
 * 暴露出一个请求函数
 * @param axiosConfig axios配置
 * @param backendConfig 后端接口字段配置
 */
export function createRequest(
  axiosConfig: AxiosRequestConfig,
  backendConfig?: Service.BackendResultConfig
) {
  const customInstance = new CustomAxiosInstance(axiosConfig, backendConfig);

  async function asyncRequest<T>(
    param: RequestParam
  ): Promise<Service.RequestResult<T>> {
    const { url, data, axiosConfig } = param;
    const method = param.method || "get";
    const { instance } = customInstance;
    const res = (await getRequestResponse(
      instance,
      method,
      url,
      data,
      axiosConfig
    )) as Service.RequestResult<T>;
    return res;
  }

  const get = <T>(url: string, config?: AxiosRequestConfig) => {
    return asyncRequest<T>({ url, method: "get", axiosConfig: config });
  };
  const post = <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    return asyncRequest<T>({ url, method: "post", data, axiosConfig: config });
  };
  const put = <T>(url: string, data?: any, config?: AxiosRequestConfig) => {
    return asyncRequest<T>({ url, method: "put", data, axiosConfig: config });
  };
  const handleDelete = <T>(url: string, config?: AxiosRequestConfig) => {
    return asyncRequest<T>({ url, method: "delete", axiosConfig: config });
  };

  return {
    get,
    post,
    put,
    delete: handleDelete,
  };
}

async function getRequestResponse(
  instance: AxiosInstance,
  method: RequestMethods,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  let res: any;
  if (method === "get" || method === "delete") {
    res = await instance[method](url, config);
  } else {
    res = await instance[method](url, data, config);
  }
  return res;
}
