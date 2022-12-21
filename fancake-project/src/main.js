import Vue from 'vue'
import App from './App.vue'
import Lottie from "vue-lottie"
import globalMethods from './assets/js/global.js'
import { router } from './routes/index.js'
import { store } from './store/index.js'

Vue.component("vue-lottie", Lottie);
Vue.use(globalMethods);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
