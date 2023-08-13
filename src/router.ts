import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/pages/HomePage/IndexPage.vue'
import AboutUsPage from '@/pages/AboutUs/AboutUsPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Anasayfa',
    },
  },
  {
    path: '/Hakimizda',
    component: AboutUsPage,
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router