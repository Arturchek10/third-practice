<template>
  <div :class="['product']">
    <img :src="product.image.file.url" class="product-img-top" alt="product img">
    <div class="product-body">
      <h5 class="product-title">{{ product.title }}</h5>
      <p :class="['product-text']">
        {{ product.price }} ₽
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {IProduct} from "@/types/product";

const props = defineProps<{product: IProduct}>()

</script>

<style scoped>

.product-img-top{
  width: 200px;
  height: 200px;
}
.product{
  margin: 35px;
  height: 250px;
  width: 250px;
}

</style>