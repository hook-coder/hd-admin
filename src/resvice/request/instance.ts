import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosError } from "axios";

/**
 * 封装axios请求
 * 暴露出一个axios实例类
 */
export default class CustomAxiosInstance {
  instance: AxiosInstance;
  backendConfig: Service.BackendResultConfig;
  constructor(
    axiosConfig: AxiosRequestConfig,
    backendConfig: Service.BackendResultConfig = {
      codeKey: "code",
      dataKey: "data",
      msgKey: "msg",
      successCode: 200,
    }
  ) {
    this.backendConfig = backendConfig;
    this.instance = axios.create(axiosConfig);
    this.setInterceptor();
  }

  //设置请求拦截器
  setInterceptor() {
    this.instance.interceptors.request.use(
      async (config) => {
        const handleConfig = { ...config };
        if (handleConfig.headers) {
          const contentType = handleConfig.headers["Content-Type"] as string;
          //设置请求发送的数据
          // handleConfig.data = await transformRequestData(
          //   handleConfig.data,
          //   contentType
          // );
          //设置token
          // handleConfig.headers.Authorzation = getToken();
        }

        return handleConfig;
      },
      (axiosError: AxiosError) => this.axiosError(axiosError)
    );

    this.instance.interceptors.response.use(
      async (response) => {
        const { status } = response;
        if (status === 200 || status < 300 || status === 304) {
          const backendResultData = response.data;
          const { codeKey, dataKey, successCode } = this.backendConfig; // msgKey保留 错误时候可以返回后端显示的错误
          //token 失效的时候
          if ("token失效") {
            //抽离handleRefreshToken方法
            // const config = await handleRefreshToken(response.config);
            // if (config) {
            //   return this.instance.request(config);
            // }
          }

          //请求成功
          if (backendResultData[codeKey] === successCode) {
            //抽离handleServiceResult方法
            // return handleServiceResult(null, backendResultData[dataKey]);
          }
        }
      },
      (axiosError: AxiosError) => this.axiosError(axiosError)
    );
  }
  //请求和响应发生错误时
  axiosError(axiosError: AxiosError) {
    //抽离handleAxiosError方法 和handlerServiceResult方法
    // const error = handleAxiosError(axiosError);
    // return handlerServiceResult(error, null);
  }
}
