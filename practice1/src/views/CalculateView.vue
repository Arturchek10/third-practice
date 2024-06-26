<template>
  <div class="main">
    <div class="container">
      <calculate />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Calculate from '@/components/Calculate.vue'
  import { useRouter } from 'vue-router';
</script>

<style scoped>

.main{
  height: 1300px;
}

</style>