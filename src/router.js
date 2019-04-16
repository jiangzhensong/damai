import Vue from 'vue'
import VueRouter from 'vue-router'

window.isLogin = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    { 
      path:'/overseas',component:()=>import('./views/Overseas.vue')
    }
  ]
})

export default router
