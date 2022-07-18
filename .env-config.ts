type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

const serviceEnv: ServiceEnv = {
  dev: {
    url: "http://localhost:8080",
    proxy: "/proxy-flag",
  },
  test: {
    url: "http://localhost:8080",
    proxy: "/proxy-flag",
  },
  prod: {
    url: "http://localhost:8080",
    proxy: "/proxy-flag",
  },
};

export function getEnvConfig(env: ImportMetaEnv) {
  const { VITE_ENV_TYPE = "dev" } = env;
  const envConfig = serviceEnv[VITE_ENV_TYPE];
  return envConfig;
}
