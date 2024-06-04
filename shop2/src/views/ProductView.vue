<!-- <template>
  <div>
    <div class="header">
      <router-link :to="{name: 'product', query: {}}"></router-link>
      <router-link :to="{name: 'product', query: {from: 'youtube'}}">from youtube</router-link>
      <router-link :to="{name: 'product', query: {from: 'email'}}">from email</router-link>
    </div>
    <h2>Product</h2>
    <h4>id: {{ route.params.id }}</h4>
    <h4 v-if="route.query.from">query: {{ route.query.from }}</h4>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()

</script> -->