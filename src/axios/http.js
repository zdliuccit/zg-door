/**
 * Created by liuzhengdong on 2017/9/6.
 * http
 * addRequestInterceptor
 * addResponseInterceptor
 */
import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://47.99.66.195:3000/mock/18'

const defaultHeaders = {
  Accept: 'application/json, text/plain, */*; charset=utf-8',
  'Content-Type': 'application/json; charset=utf-8',
  Pragma: 'no-cache',
  'Cache-Control': 'no-cache',
}
// 设置默认头
Object.assign(axios.defaults.headers.common, defaultHeaders)

const methods = ['get', 'post', 'put', 'delete']

const http = {}
methods.forEach(method => {
  http[method] = axios[method].bind(axios)
})

export default http

export const addRequestInterceptor = axios.interceptors.request.use.bind(axios.interceptors.request)

export const addResponseInterceptor = axios.interceptors.response.use.bind(axios.interceptors.response)
