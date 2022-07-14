/*
 * @Author: starry
 * @Description: axios请求封装
 * @LastEditors: starry
 * @LastEditTime: 2022-07-14 17:48:31
 */

import axios from 'axios';
import { ElMessage } from "element-plus"
import Qs from 'qs';

const BASE_URL = ''; //请求接口url 如果不配置 则默认访问链接地址
const TIME_OUT = ''; // 接口超时时间

const instance = axios.create({
	baseURL:BASE_URL,
	TIME_OUT: TIME_OUT
})

// 可以添加一个axios的全局配置
instance.defaults.headers.post = {
  "Content-Type":'application/x-www-form-urlencoded'
}

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 可以在此处添加一些共有的请求拦截
  // 比如添加header['Authorization']
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'时 使用qs转换data
  return config
},(error) => {
  ElMessage({
    message: '加载超时',
    type: 'error',
    duration: 2000
  });
  return Promise.reject(error);
})

// 添加响应拦截器
instance.interceptors.response.use((response)=>{
	const res = response.data;
	// 在此处添加一些响应拦截
  // 可以判断状态码 
  if(res.code === 401) {
    ElMessage({
      message: '登录过期，请重新登录',
      type: 'error',
      duration: 2000
    });
    // 跳转回登录
  }
  return response.data;
},(error)=>{
	return Promise.reject(error);
})

export default instance;


/**
 * 使用说明
 * 
 */

//  import request from '@/utils/request';
// export function GetCount(data) {
//   return request({
//     method: 'post', // post get delete put ...
//     url: url,
//     data
//   });
// }