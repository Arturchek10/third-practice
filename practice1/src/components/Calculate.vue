<template>
  <div>
    <div class="container">
      <div class="input-data">
        <div class="text-block">
          <p>Количество месяцев</p>
          <p>Процентная ставка вклада</p>
          <p>Сумма вклада</p>
        </div>
        <div class="input-block">
          <input
            type="text"
            id="month"
            placeholder="введите число"
            v-model="monthValue"
            @input="handleMonthInput"
          />
          <input
            type="text"
            id="procent"
            placeholder="введите число"
            v-model="procentValue"
            @input="handleProcentInput"
          />
          <input
            type="text"
            id="summa"
            placeholder="введите число"
            v-model="summaValue"
            @input="handleSummaInput"
          />
        </div>
      </div>
      <div class="output-data">
        <p>Доход</p>
        <div class="container-for-digit">
          <p>{{ profit }} ₽</p>
        </div>
      </div>
    </div>
    <div style="display: block">
      <h3>прокрутите вниз чтобы обновить данные</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
// оптимизировать!
import { computed, onMounted, onUnmounted, ref } from "vue";

//рефы для подсчета
const month = ref<number>(0);
const procent = ref<number>(0);
const summa = ref<number>(0);

//рефы для вывода
const monthValue = ref<number>(0);
const procentValue = ref<number>(0);
const summaValue = ref<number>(0);
let profit = computed<number | string>(() => {
  if (
    isNaN(monthValue.value) ||
    isNaN(procentValue.value) ||
    isNaN(summaValue.value)
  ) {
    return "0.00";
  } else if (
    monthValue.value == undefined ||
    procentValue.value == undefined ||
    summaValue.value == undefined
  ) {
    return "0.00";
  } else if (
    monthValue.value === Number("") ||
    monthValue.value === Number("") ||
    monthValue.value === Number("")
  ) {
    return "0.00";
  } else if (month.value !== 0 || procent.value !== 0 || summa.value !== 0) {
    return Number(
      getCalculateProfit(month.value, procent.value, summa.value)
    ).toLocaleString("ru-Ru");
  }
  return "0.00";
});

//debounce
function debounce(func: Function, wait: number) {
  let timeout: number | undefined;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
}

const debouncedSetMonth = debounce((value: number) => {
  month.value = value;
}, 1000);

const debouncedSetProcent = debounce((value: number) => {
  procent.value = value;
}, 1000);

const debouncedSetSumma = debounce((value: number) => {
  summa.value = value;
  }, 1000);

const getCalculateProfit = (m: number, p: number, s: number) => {
  return ((s * p * ((m * 30) / 365)) / 100).toFixed(2);
};

const handleMonthInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  debouncedSetMonth(Number(target.value));
};

const handleProcentInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  debouncedSetProcent(Number(target.value));
};

const handleSummaInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  debouncedSetSumma(Number(target.value));
};

const resetValues = () => {
  monthValue.value = 0;
  procentValue.value = 0;
  summaValue.value = 0;
  month.value = 0;
  procent.value = 0;
  summa.value = 0;
};

//удаление при скролле
const handleScroll = () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 400) {
    resetValues();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.container {
  width: 600px;
  height: 300px;
  background: rgb(255, 255, 255);
  margin: auto;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
}

.input-data {
  margin-left: 30px;
  margin-top: 50px;
  display: flex;
}

.text-block {
  margin-top: -20px;
  width: 200px;
  text-align: left;
}

.text-block p {
  margin: 40px 0;
}

.input-block {
  width: 200px;
}
.input-block input {
  margin: 20px 0;
}
#procent {
  height: 40px;
}

.output-data {
  margin-right: 50px;
  transform: translateY(80px);
}

.container-for-digit {
  background: rgb(225, 225, 225);
  height: 50px;
  min-width: 60px;
  border-radius: 10px;
  padding: 10px;
}
.container-for-digit p {
}
</style>
