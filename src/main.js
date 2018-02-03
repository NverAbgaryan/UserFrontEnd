import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io'
import {Col,Row,Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(VueSocketio, 'http://localhost:3000', store)


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
