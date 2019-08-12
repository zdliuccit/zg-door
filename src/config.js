import Vue from 'vue'
import http from './axios'
import { addRequestInterceptor, addResponseInterceptor } from './axios/http'
import components from './components'

// 注册插件
Vue.use(http)

// 注册组件
components.forEach(comp => {
  Vue.component(`zg-${comp.name}`, comp)
})

// http-request请求前拦截器
addRequestInterceptor(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// http-response请求后拦截器
addResponseInterceptor(
  (response) => {
    // 在这里统一前置处理请求响应
    if (Number(response.status) !== 200) {
      // 全局notify有问题，还是自己处理吧
      return Promise.reject(response.data)
    }
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error || '出错了')
  }
)
