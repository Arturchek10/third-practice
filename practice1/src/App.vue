<template>
  <div class="main">
    <div class="head">
      <h1 class="title-name">project title</h1>
      <router-link class='link' style="margin-right: 30px;" to="/catalog">catalog</router-link>
      <router-link class='link' to="/settings">settings</router-link>
    </div>
    <router-view/> 
  </div>
</template>

<script setup lang="ts">





</script>

<style >
html{
  background: #DDA0DD;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
head{
  margin:auto
}
.main{
  text-align: center;
}
.hello-img{
  margin-top: 8%;
}
.link{
  color: green;
  text-decoration: none;
}
.roboto-slab {
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

</style>