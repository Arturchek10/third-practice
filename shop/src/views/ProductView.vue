<template>
  <div>
    <header class="header">
      <router-link :to="{name: 'product', query: {}}">
        unknown
      </router-link>
      <router-link :to="{name: 'product', query: {from: 'youtube'}}">
        from youtube
      </router-link>
      <router-link :to="{name: 'product', query: {from: 'email'}}">
        from email
      </router-link>
    </header>
    <h3>Product page</h3>
    <h4>id: {{  route.params.id }}</h4>
    <h4>from: {{ route.query.from }}</h4>
    <p v-if="route.query.from">добро пожаловать, рады видеть вас из <b>{{ route.query.from }}</b></p>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';


const route = useRoute()
</script>
