import Vue from 'vue'
import App from './App.vue'
import VueTour from 'vue-tour'
import router from './router'
import store from './store'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
