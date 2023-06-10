import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: home },
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/about/:id', component: about },
  ]
})

export default router
