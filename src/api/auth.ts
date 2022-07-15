import { mockRequest } from "../request";

/**
 * 刷新token
 * @params refreshToken 刷新的token
 */
const fetchUpdateToken = (refreshToken: string) => {
  return mockRequest.post<ApiAuth.Token>("/updateToken", { refreshToken });
};

export { fetchUpdateToken };
