<script>
import { ref } from 'vue'

export default {
  setup(_, { emit }) {
    const selectedOption = ref('box')

    const sendSelectedOption = () => {
      emit('optionSelected', selectedOption.value)
    }

    return {
      selectedOption,
      sendSelectedOption
    }
  }
}
</script>

<template>
  <div class="boxstyles">
    <h3>Typ Krabice</h3>
    <select v-model="selectedOption" @change="sendSelectedOption">
      <option value="box">box</option>
      <option value="box-open">box-open</option>
      <option value="half">half</option>
      <option value="half-open">half-open</option>
      <option value="box-q">box-q</option>
    </select>
    <div v-if="selectedOption === 'box'">
      <p>Krabica</p>
      <p><b>FEFCO Code:</b> 0201</p>
      <img src="@/assets/images/box.jpg" alt="box image" />
    </div>
    <div v-else-if="selectedOption === 'box-open'">
      <p>Otvorená krabica</p>
      <p><b>FEFCO Code:</b> 0200</p>
      <img src="@/assets/images/box-open.jpg" alt="box-open" />
    </div>
    <div v-else-if="selectedOption === 'half'">
      <p>Polovička krabice</p>
      <p><b>FEFCO Code:</b> 0201</p>
      <img src="@/assets/images/half.jpg" alt="half" />
    </div>

    <div v-else-if="selectedOption === 'half-open'">
      <p>Polovička otvorenej krabice</p>
      <p><b>FEFCO Code:</b> 0200</p>
      <img src="@/assets/images/half-open.jpg" alt="half-open" />
    </div>
    <div v-else-if="selectedOption === 'box-q'">
      <p>Box-Q</p>
      <p><b>FEFCO Code:</b> 0200</p>
      <img src="@/assets/images/box.jpg" alt="box-q" />
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
  height: 300px;
}
</style>
