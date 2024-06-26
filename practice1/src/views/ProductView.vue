<template>

<div class="container" v-if="product">
  <div class="header">
    <h2>карточка товара</h2>
  </div>
  <div class="body">
    <img :src="product.image.file.url" alt="изображение отстутсвует" class="product-img">
    <p>{{ product.title }}</p>
    <p>{{ product.price }} ₽</p>
  </div>
</div>
<div v-else>
  <p>loading...</p>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import {onMounted, ref} from 'vue'
import { IProduct } from 'api/product'

const route = useRoute()
const product = ref<IProduct | null>(null)

const loadProduct = async() => {
  const id = route.params.id
  const fetchResponse = await fetch(`https://vue-study.skillbox.cc/api/products/${id}`)
  const data = await fetchResponse.json()
  product.value = data
}

onMounted(loadProduct)

</script>

<style scoped>

.product-img{
  width: 350px;
  max-height: 450px;
}
</style>