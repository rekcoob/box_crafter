<script setup>
import { ref, defineEmits } from 'vue'

const inputs = ref({
  length: null,
  width: null,
  height: null
})
const formValid = ref(false)
const emit = defineEmits(['inputsChanged'])

const emitInputs = () => {
  // Set formValid to true when all 3 inputs are filled
  formValid.value =
    inputs.value.length !== null && inputs.value.width !== null && inputs.value.height !== null

  // Emit object | 1st argument = event name, 2nd arg = payload

  emit('inputsChanged', { inputs: inputs.value, formValid: formValid.value })
}
</script>

<template>
  <div class="dimensions_section border">
    <form>
      <div class="form-group">
        <h3>Inner Dimensions</h3>
        <input
          v-model.number="inputs.length"
          @input="emitInputs"
          type="number"
          placeholder="Length"
          required
        />
        <input
          v-model.number="inputs.width"
          @input="emitInputs"
          type="number"
          placeholder="Width"
          required
        />
        <input
          v-model.number="inputs.height"
          @input="emitInputs"
          type="number"
          placeholder="Height"
          required
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.dimensions_section {
  padding: 15px;
}

input[type='number'] {
  background-color: #181a1b;
  color: #e8e6e3;
  width: 100%;
  padding: 12px 20px;
  margin: 6px 0;
  box-sizing: border-box;
  border: 1px solid #0062cc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 0.25rem;
  /* outline: none; */
}
input[type='number']:focus {
  border: 1px solid #0062cc;
  box-shadow: 0 0 20px #0062cc;
}
input[type='number']:disabled {
  border: 1px solid grey;
  opacity: 0.5;
  cursor: not-allowed;
}

/* Hide the spin box for number input */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  /* Firefox */
  -moz-appearance: textfield;
  /* Chrome, Safari, Edge */
  appearance: textfield;
}
</style>
