<script>
import MaterialButtons from './components/MaterialButtons.vue'
import DimensionsInput from './components/DimensionsInput.vue'
import BoxImage from './components/BoxImage.vue'
import BoxResults from './components/BoxResults.vue'
import DownloadBtn from './components/DownloadBtn.vue'

export default {
  name: 'App',
  components: {
    MaterialButtons,
    DimensionsInput,
    BoxImage,
    BoxResults,
    DownloadBtn
  },
  data() {
    return {
      inputs: {
        length: null,
        width: null,
        height: null
      },
      thickn: 5,
      formValid: false
    }
  },
  methods: {
    handleInputsChange(data) {
      this.inputs = data.inputs
      this.formValid = data.formValid
    },
    handleThicknChange(t) {
      this.thickn = t
    }
  }
}
</script>

<template>
  <h2>BigBox Crafter ♥</h2>
  <div class="container">
    <div class="input-section">
      <!-- <DimensionsInput @input="length = $event.target.value" /> -->
      <DimensionsInput
        @inputsChanged="handleInputsChange"
        @form-validity-changed="updateButtonColor"
      />
      <MaterialButtons @thicknChanged="handleThicknChange" />
    </div>
    <DownloadBtn :results="inputs" :thickn="thickn" :formValid="formValid" />
    <BoxResults :results="inputs" :thickn="thickn" :formValid="formValid" />
    <BoxImage />
  </div>
</template>

<style scoped>
.input-section {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
}
</style>
