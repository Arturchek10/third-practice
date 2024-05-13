<template>
  <div class="container">
    <div class="head">

      <h1>project title</h1>
      <header class="header">
        <router-link to="/product">main page</router-link>
        <router-link to="/catalog">catalog</router-link>
      </header>
    </div>
    <router-view />
  </div>
</template>


<script setup lang="ts">
import { RouterLink } from "vue-router";



</script>

<style>

a{
  margin-right: 20px;
}
.header{
  display: flex;
  gap: 12px;
}
html{
  background: pink;
}
.head{
  margin-left: 40%;
}
</style>
