import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './style/default.less'
import './style/component.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
