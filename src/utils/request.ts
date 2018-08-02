import axios from 'axios';
import * as Cookies from 'js-cookie';

//create an axios instance
const service = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 90000 // request timeouts
})

// 请求的拦截设置
service.interceptors.request.use(
  config => {
    config.headers = {
      'token': Cookies.get('token'),
      'Content-Type': 'application/json;charset=utf-8'
    }
    return config;
  }, error => {
    console.log('request:' + error);
    Promise.reject(error);
  }
)

// 请求的响应设置
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          error.message = '未授权,或者token过期';
          window.location.href = window.location.origin + '/admin/#/' + error.response.status;
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          // window.location.href = window.location.origin + '/admin/#/' + error.response.status;
          console.log(error.message)
          break;
        case 500:
          error.message = '服务器内部错误';
          let desc = 'errorCode:' + error.response.data.errorCode + '\n';
          desc += 'resultMsg:' + error.response.data.resultMsg + '\n';
          console.error({
            title: '500错误',
            desc: desc,
            duration: 3
          });
          break;
      }
    }
    Promise.reject(error);
  }
)

export default service;
