<template>
  <div class="main">
    <div class="header">
      <h2>catalog page</h2>
    </div>
    <div class="filter">
      <p>название</p>
      <input type="text" v-model='searchText'>
      <p>цена от:</p>
      <input type="text" v-model="minPrice">
      <p>цена до:</p>
      <input type="text" v-model="maxPrice">
    </div>
    <div class="product-list">
      <product-card
      v-for="product in filteredComputed"
      :key="product.id"
      :product="product"
      @open-card="openCardNewPage"
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
import {computed, ref, watch} from 'vue'
import type {IProduct} from '@/api/products'
import ProductCard from '@/components/ProductCard.vue'
import Pagination from '@/components/Pagination.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const products = ref<IProduct[]>([])

const pagination = ref({
  page: 1, // текущая страницы
  pages: 0, // всего страниц
  total: 0, // лимит элементов на странице
})

const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)

const searchText = ref('')

const filteredComputed = computed(() => {
  return products.value.filter((product => {
    if (minPrice.value && product.price < minPrice.value || maxPrice.value && product.price > maxPrice.value ){
      return false
    } else{
      return true
    }
  }))
})

const loadProducts = async (page : number, searchText?: string) => {
  const response = await getProduct(page, searchText)
  products.value = response.products
  pagination.value = response.pagination
}


const changePage = async(page: number) => {
  if(page !== pagination.value.page)
  await loadProducts(page)
}


const obj = ref({id: 1})
const obj2 = ref({id: 1})

setTimeout(() => {
  obj.value.id = 2;
  // obj2.value.id = 2;
}, 2000)

watch([obj,obj2], (newVal) =>{
  console.log(newVal);
}, {deep: true})

watch(searchText, (newVal, oldVal) => {
  if (newVal.length > 2){
    loadProducts(1, newVal)
  } else {
    loadProducts(1)
  }
},{immediate: true})


const openCardNewPage = (id: number) => {
  router.push(`/product/${id}`) 
}

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

.filter{
  margin: 0 0 2em 0;
}
</style>