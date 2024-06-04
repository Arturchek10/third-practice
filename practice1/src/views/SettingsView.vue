<template>
  
  <div class="main">
    <div class="head">
      <h2>settings page</h2>
    </div>
    <div class="container">
      <input type="checkbox" id="check" @change='changeBg' :checked="isChange">
      <label for="check" class="button"></label>
    </div>
    <div class="description">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </div>  
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted  } from 'vue';

const isChange = ref(localStorage.getItem('isChange') === 'true' || false);
console.log(isChange.value)

const changeBg = () => {
  isChange.value = !isChange.value 
  localStorage.setItem('isChange', isChange.value.toString());
  console.log(isChange.value);
}

watchEffect(() => {
  if (isChange.value) {
    document.documentElement.style.backgroundColor = '#20096d'; // New background color // синий
    document.documentElement.style.color = 'white'; // new text color
  } else {
    document.documentElement.style.backgroundColor = '#DDA0DD'; // Initial background color //розовый
    document.documentElement.style.color = 'black'; // initial text color
  }
});

onMounted(() => {
  if (isChange.value){
    document.documentElement.style.backgroundColor = '#20096d';
    document.documentElement.style.color = 'white';
  } else {
    document.documentElement.style.backgroundColor = '#DDA0DD';
    document.documentElement.style.color = 'black';
  }
})


</script>


<style scoped >
html{
  background: #DDA0DD;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.container{
  width: 200px;
  height: 70px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  background: #E0FFFF;
  margin: auto;
  margin-top: 100px;
  justify-content: center;
}
h2{
  margin: 19.20px 0 19.20px 0;
}
.button{
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background:#d2d2d2;
  position: relative;
  cursor: pointer;
  margin-left: -120px;
  transition: 1s;

}
input:checked + .button{
  background: #20096d;
}
input:checked + .button{
  transform: translateX(120px);
  transition: 1s;
}
#check{
  display: none;
}
.description{
  width: 40%;
  font-size: 15px;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%; 
}

</style>
