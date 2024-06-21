import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'catalog',
      path: '/catalog',
      component: () => import ('@/views/CatalogView.vue')
    },
    {
      name: 'settings',
      path: '/settings',
      component: () => import ('@/views/SettingsView.vue')
    },
    {
      name: 'product',
      path: '/product/:id',
      component: () => import ('@/views/ProductView.vue')
    }
  ]
})


export default router