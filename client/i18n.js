import Vue from 'vue'
import VueI18n from 'vue-i18n'
import localI18n from './lang'

Vue.use(VueI18n)

const i18n = new VueI18n()

/**
 * 更新语言设置
 * @param lang
 */
const setI18n = lang => {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  localStorage.setItem('ZG_DOOR_LANG', lang)
  return lang
}
const initI18nData = data => {
  setI18n(localStorage.getItem('ZG_DOOR_LANG') || 'zh')
  Object.keys(localI18n).forEach(key => {
    localI18n[key] = Object.assign(localI18n[key], data[key])
    i18n.setLocaleMessage(key, localI18n[key])
  })
}
export default async function init(cb = () => Promise.resolve()) {
  
  await cb().then((data = {}) => {
    initI18nData(data)
  })
  Vue.prototype.$setI18n = setI18n
  
  return i18n
}
