// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import 'css/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': require('../common/lang/zh'),
    'en-US': require('../common/lang/en')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
