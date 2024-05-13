<script setup>
import { ref, defineEmits } from 'vue'

const mat = ref(3)
const thickn = ref(5)
const emit = defineEmits(['thicknChanged'])

const switchActive = (n) => {
  mat.value = n
  switch (n) {
    case 1:
      thickn.value = 3
      break
    case 2:
      thickn.value = 4
      break
    default:
      thickn.value = 5
  }
  emit('thicknChanged', thickn.value)
}
</script>

<template>
  <div class="material_section flex-col center border">
    <h3>Material</h3>
    <div class="flex">
      <button class="btn-primary" :class="{ active: mat === 1 }" @click="switchActive(1)">B</button>
      <button class="btn-primary" :class="{ active: mat === 2 }" @click="switchActive(2)">C</button>
      <button class="btn-primary" :class="{ active: mat === 3 }" @click="switchActive(3)">
        BC
      </button>
    </div>
    <p><b>Thickness:</b> {{ thickn }} mm</p>
  </div>
</template>

<style scoped>
.material_section {
  margin: 30px 0px;
}

button {
  /* display: inline-block; */
  margin: 10px 0;
  padding: 0.5em 1em;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-primary {
  background-color: #181a1b;
  color: #1e84ff;
  border: 1px solid #007bff;
}
.btn-primary:hover {
  border-color: #0056b3;
  box-shadow: 0 0 10px #0062cc;
  opacity: 0.9;
}
.active {
  background-color: #0056b3;
  color: #fff;
}
</style>
