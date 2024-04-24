<script setup>
import { ref } from 'vue'
import boxImage from '@/assets/images/box.jpg'
import boxOpenImage from '@/assets/images/box-open.jpg'
import halfImage from '@/assets/images/half.jpg'
import halfOpenImage from '@/assets/images/half-open.jpg'
import boxQImage from '@/assets/images/box-q.jpg'

const selectedOption = ref('box')
const emit = defineEmits(['optionSelected'])

const sendSelectedOption = () => {
  emit('optionSelected', selectedOption.value)
}

const options = {
  box: {
    label: 'Regular Slotted Box',
    fefcoCode: '0201',
    image: boxImage,
    alt: 'box image'
  },
  'box-open': {
    label: 'Half Slotted Box',
    fefcoCode: '0200',
    image: boxOpenImage,
    alt: 'box-open'
  },
  half: {
    label: 'Slotted Half',
    fefcoCode: '0201',
    image: halfImage,
    alt: 'half'
  },
  'half-open': {
    label: 'Half Slotted Half',
    fefcoCode: '0200',
    image: halfOpenImage,
    alt: 'half-open'
  },
  'box-q': {
    label: 'Testing Box-Q',
    fefcoCode: '0200',
    image: boxQImage,
    alt: 'box-q'
  }
}
</script>

<template>
  <div class="boxstyles">
    <h3>Box Style</h3>
    <div class="custom-select-wrapper">
      <select v-model="selectedOption" @change="sendSelectedOption" class="custom-select">
        <option value="box">box</option>
        <option value="box-open">box open</option>
        <option value="half">half</option>
        <option value="half-open">half open</option>
        <!-- <option value="box-q">test</option> -->
      </select>
    </div>
    <div v-if="selectedOption">
      <p>{{ options[selectedOption].label }}</p>
      <p><b>FEFCO Code:</b> {{ options[selectedOption].fefcoCode }}</p>
      <img :src="options[selectedOption].image" :alt="options[selectedOption].alt" />
    </div>
  </div>
</template>

<style scoped>
.boxstyles {
  margin: 40px;
}
img {
  width: 500px; /* Adjust the width as per your requirement */
  height: auto; /* Maintain aspect ratio */
  /* height: 300px; */
}
.custom-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: inherit;
  background-color: inherit;
  border: 1px solid #1e84ff;
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
.custom-select:focus {
  border-color: #1e84ff;
  outline: 1;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
/* Dropdown menu */
.custom-select option {
  background-color: #333;
  color: #fff;
}
</style>
