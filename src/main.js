import Vue from 'vue'
import App from './App.vue'
import Lottie from "vue-lottie"
import { router } from './routes/index.js';
import { store } from './store/index.js'

Vue.component("vue-lottie", Lottie);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
