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
    <div class="custom-select-wrapper">
      <select v-model="selectedOption" @change="sendSelectedOption" class="custom-select">
        <option value="box">krabica</option>
        <option value="box-open">krabica otvorená</option>
        <option value="half">polovička</option>
        <option value="half-open">polovička otvorená</option>
        <option value="box-q">test</option>
      </select>
    </div>
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
      <p>Testing Box-Q</p>
      <p><b>FEFCO Code:</b> 0200</p>
      <img src="@/assets/images/box-q.jpg" alt="box-q" />
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
  background-color: #333; /* Dark background color */
  color: #fff; /* Text color */
}
</style>
