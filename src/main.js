import { createApp } from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
// 匯入 vee-validate 相關規則
import rules from '@vee-validate/rules'
// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import $ from 'jquery'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay, Navigation, Thumbs } from 'swiper/core'
import Toast from './components/Toast.vue' // toast 通知回饋

import Pagination from './components/Pagination.vue'
import App from './App.vue'
import router from './router'
import toCurrency from './assets/javascript/toCurrency'

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
setLocale('zh_TW')
SwiperCore.use([Autoplay, Navigation, Thumbs])

window.$ = $

const app = createApp(App)

app.config.globalProperties.$toCurrency = toCurrency

const options = {
  confirmButtonColor: '$primary',
  cancelButtonColor: '#f00',
  icon: 'success'
}
app.use(VueAxios, axios)
app.use(VueSweetalert2, options)

app.use(router)
app.mount('#app')
app.component('Pagination', Pagination)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// 註冊 toast 通知回饋
app.component('Toast', Toast)
