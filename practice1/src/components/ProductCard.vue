<template>
  <div :class="['product'] ">
    <img :src="product.image.file.url" class="product-img-top" alt="product image">
    <div class="product-body">
      <h5 class="product-title">{{ product.title }}</h5>
      <p :class="['product-text']">
        {{ product.price }} ₽
      </p>
    </div>
    <!-- <button @click="showSmallPriceClass = !showSmallPriceClass">Change class</button> -->
  </div>
</template>

<script setup lang="ts">
import type {IProduct} from "@/types/product";
// import {computed, ref} from 'vue';

const props = defineProps<{ product: IProduct }>()
// const showSmallPriceClass = ref(false);

// const propsIsSmall = computed(() => {
//   console.log(props.product.id);
//   return !showSmallPriceClass.value && props.product.price !== undefined && props.product.price < 5000
// })

</script>

<style scoped>
.product {
  width: 200px;
  margin: 10px;
  border: 1px solid transparent;
  border-radius: 6px;
}
.product-with-small-price {
  border: 3px solid #027502;
}
.product-img-top {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: white;
  border-radius: 6px 6px 0 0;
}
.product-title {
  font-size: 1.15rem;
  font-weight: 400;
}
.product-text {
  font-size: 1rem;
}
/* .product-text-with-small-price {
  color: #027502;
  font-weight: 700;
} */
.product-body {
  padding: 4px;
}
h5 {
  margin: 16px 0;
}
</style>