import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product-category/:id',
    name: 'category',
    component: () => import(/* webpackChunkName: "about" */ '../views/CategoryView.vue')
  },
  {
    path: '/product-detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
