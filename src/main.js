import Vue from 'vue'
import App from './App.vue'
import './config'
import http from './axios/http'

import i18n from './i18n'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
 * 语言包来自接口请求
 */
i18n(() => {
  return new Promise((resolve, reject) => {
    http.get('/api/getLang').then(res => {
      resolve(res.data || {})
    })
  })
}).then(i18n => {
  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App)
  })
}).catch(() => {
  console.log('获取语言包失败....请检查接口')
})
