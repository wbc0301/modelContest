import Vue from 'vue'
import VueRouter from 'vue-router'
import ff from '../views/ff.vue'
import ef from '../views/ef.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ff'
  },
  {
    path: '/ff',
    component: ff
  },
  {
    path: '/ef',
    component: ef
  }
]

const router = new VueRouter({
  routes
})

export default router
