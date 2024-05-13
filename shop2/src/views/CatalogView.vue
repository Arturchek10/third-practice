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
</div>  
</template>

<script setup lang="ts">
import { getProduct } from '@/api/product'
import {ref} from 'vue'
import type {IProduct} from '@/types/product'
import ProductCard from '@/components/ProductCard.vue'


const products = ref<IProduct[]>([])

const loadProducts = async () => {
  const response = await getProduct()
  products.value = response
}

loadProducts()
</script>

<style scoped>

.product-list{
  display: flex;
  flex-wrap: wrap;
  margin-left: 60px;
}
h2{
  margin-left: 42%;
}
</style>