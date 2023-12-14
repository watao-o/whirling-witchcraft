import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/BaseWhirlingWitchcraft',
    name: 'BaseWhirlingWitchcraft',
    component: () => import('@/components/BaseWhirlingWitchcraft.vue')
  },
  {
    path: '/card-list',
    name: 'cardList',
    component: () => import('@/components/infomation/CardList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
