import Vue from 'vue'
import VCharts from 'v-charts'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './plugins/ant-design-vue.js'
import '@/assets/css/reset.less'

Vue.use(VCharts)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
