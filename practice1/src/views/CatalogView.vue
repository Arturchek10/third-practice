<template>
  <div class="main">
    <div class="header">
      <h2>catalog page</h2>
    </div>
    <div class="product-list">
      <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
      />
    </div>
    <div class="pagination">
      <Pagination
      :total-pages = pagination.pages
      :current-page = pagination.page
      @update:current-page="changePage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {getProduct} from 'C:/Users/artur/OneDrive/Рабочий стол/Артур/js/vue/third-practice/practice1/api/product.ts'
import {ref} from 'vue'
import type {IProduct} from '@/api/products'
import ProductCard from '@/components/ProductCard.vue'
import Pagination from '@/components/Pagination.vue';

const products = ref<IProduct[]>([])

const pagination = ref({
  page: 1, // текущая страницы
  pages: 0, // всего страниц
  total: 0, // лимит элементов на странице
})

const loadProducts = async (page : number) => {
  const response = await getProduct(page)
  products.value = response.products
  pagination.value = response.pagination
}

const changePage = async(page: number) => {
  if(page !== pagination.value.page)
  await loadProducts(page)
}

loadProducts(pagination.value.page)
</script>

<style scoped>
*{
  font-weight: 400;
}
.product-list{
  display: flex;
  flex-wrap: wrap;
  margin-left: 28%;
  width: 50%;
}

.pagination{
  display: block;
  padding: 10px;
}

</style>