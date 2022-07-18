type ServiceEnvType = "dev" | "test" | "prod";

/** 后台服务的环境配置 */
interface ServiceEnvConfig {
  /** 请求地址 */
  url: string;
  /** 代理标识, 用于拦截地址转发代理(和后端请求路径中有无该路径没有关系) */
  proxy: "/proxy-flag";
}

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
  /** vite环境类型 */
  readonly VITE_ENV_TYPE?: ServiceEnvType;
  /** 开启请求代理 */
  readonly VITE_HTTP_PROXY?: "Y" | "N";

  /** hash路由模式 */
  readonly VITE_HASH_ROUTE?: "Y" | "N";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
