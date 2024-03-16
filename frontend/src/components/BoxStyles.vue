<script>
import { ref } from 'vue'

export default {
  setup(_, { emit }) {
    const selectedOption = ref('0200')

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
      <option value="0200">0200</option>
      <option value="0201">0201</option>
      <option value="0210">0210</option>
      <option value="0211">0211</option>
    </select>
    <div v-if="selectedOption === '0200'">
      <p>Regular slotted box</p>
      <img src="@/assets/images/0200.jpg" alt="Option 1 Image" />
    </div>
    <div v-else-if="selectedOption === '0201'">
      <p>Regular Slotted box made 2 halves</p>
      <img src="@/assets/images/0201.jpg" alt="Option 2 Image" />
    </div>
    <div v-else-if="selectedOption === '0210'">
      <p>Half slotted - Open box</p>
      <img src="@/assets/images/0210.jpg" alt="Option 3 Image" />
    </div>
    <div v-else-if="selectedOption === '0211'">
      <p>Half slotted - Open Box made with 2 halves</p>
      <img src="@/assets/images/0211.jpg" alt="Option 4 Image" />
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
