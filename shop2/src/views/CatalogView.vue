<template>
<div>
  <div class="filter">
    <p style="font-weight: 700;">цена от: </p>
    <input type="text" v-model="minPrice">
    <p style="font-weight: 700;">до: </p>
    <input type="text" v-model="maxPrice">
  </div>
<h2>Catalog</h2>
<div class="product-list">
  <ProductCard
    v-for="product in filteredComputed"
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
import {computed, ref} from 'vue'
import type {IProduct} from '@/types/product'
import ProductCard from '@/components/ProductCard.vue'
import AppPagination from '@/components/AppPagination.vue';
import type { IPagination } from '@/types/global';

const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)

const filteredComputed = computed(() => {
  return products.value.filter((product) => {
    if (minPrice.value && product.price < minPrice.value
      || maxPrice.value && product.price > maxPrice.value
     ) return false

     return true
  })
})

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
.filter{
  margin-left: 40%;
}
</style>