<template>
  <div>
    <h2 style="margin-left: 40%; font-size: 35px;">каталог</h2>
    <div class="product-list">
      <ProductCard 
      v-for="product in products"
      :key="product.id"
      :product = "product"
      />
    </div>
    <appPagination
    :total-page="pagination.total"
    :current-page="pagination.page"
    @update:current-page="changePage"
    />
  </div>
</template>

<script setup lang="ts">
import { getProduct } from '@/api/product';
import type { IProduct } from '@/types/product';
import ProductCard from '@/components/ProductCard.vue';
import { ref } from 'vue';
import type { IPagination } from '@/types/global';
import AppPagination from '@/components/AppPagination.vue'

const products = ref<IProduct[]>([])
const pagination = ref<IPagination>({
  page: 1,
  pages: 0,
  total: 0,
})

const loadProducts = async (page: number) => {
  const response = await getProduct(page)
  products.value = response.products
  pagination.value = response.pagination
}

const changePage = async (page: number) => {
  if (page !== pagination.value.page){
    await loadProducts(page)
  }
}

loadProducts(pagination.value.page)
</script>

<style scoped>
.product-list{
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
}
</style>