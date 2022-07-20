declare namespace Service {
  /**
   * 请求错误：
   * @axios 网络错误，请求超时
   * @http 请求成功 错误状态码
   * @backend 请求成功 响应http为200 后端错误
   */
  type RequestErrorType = "axios" | "http" | "backend";

  /** 自定义请求结果 */
  type RequestResult<T = any> = SuccessResult<T> | FailedResult;

  /** 请求成功 自定义返回的结果 */
  type SuccessResult<T = any> = {
    error: null;
    data: T;
  };

  /** 请求失败 自定义返回的结果 */
  type FailedResult = {
    error: RequestError;
    data: null;
  };

  /** 请求错误
   * @type 错误类型
   * @code 状态码
   * @msg 错误信息
   */
  interface RequestError {
    type: RequestErrorType;
    code: string | number;
    errMsg: string;
  }

  /**
   * 后端返回数据结构配置
   * @codeKey 后端请求状态码
   * @dataKey ~数据
   * @msgKey ~消息
   * @successCode ~成功的状态
   */
  interface BackendResultConfig {
    codeKey: string;
    dataKey: string;
    msgKey: string;
    successCode: number | string;
  }
}
