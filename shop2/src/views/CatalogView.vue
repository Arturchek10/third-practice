<template>
<div>
<h2>Catalog</h2>
<div class="product-list">
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :product="product"
  />
</div>
<AppPagination
  :current-page="pagination.page"
  :total-pages="pagination.pages"
  @update:current-page="changePage"
  />
</div>  
</template>

<script setup lang="ts">
import { getProduct } from '@/api/product'
import {ref} from 'vue'
import type {IProduct} from '@/types/product'
import ProductCard from '@/components/ProductCard.vue'
import AppPagination from '@/components/AppPagination.vue';
import type { IPagination } from '@/types/global';


const products = ref<IProduct[]>([])
const pagination = ref<IPagination>({
  page: 1,
  pages: 0,
  total: 0
})
const loadProducts = async (page: number) => {
  const response = await getProduct(page)
  products.value = response.products
  pagination.value = response.pagination
}

const changePage = async(page: number) => {
  if(page !== pagination.value.page){
    await loadProducts(page)
  }
}

loadProducts(pagination.value.page)
</script>

<style scoped>

.product-list{
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin-left: 20% ;
}
h2{
  margin-left: 42%;
}
</style>