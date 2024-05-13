import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      name: 'product',
      path: '/product/:id',
      component: () => import('@/views/ProductView.vue'),
    },
    {
      name: 'catalog',
      path: '/catalog',
      component: () => import('@/views/CatalogView.vue'),
    },
    {
      name: 'not-found',
      path: '/:patchMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ]
})

export default router