import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

import './register'
// 引入
import 'common/stylus/index.styl'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
