import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(vant)

import { Cell,List } from 'vant';

Vue.use(Cell).use(List);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
