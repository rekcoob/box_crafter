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
      thickn: 5
    }
  },
  methods: {
    handleInputsChange(inputs) {
      this.inputs = inputs
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
      <DimensionsInput @inputsChanged="handleInputsChange" />
      <MaterialButtons @thicknChanged="handleThicknChange" />
    </div>
    <DownloadBtn :results="inputs" :thickn="thickn" />
    <BoxResults :results="inputs" :thickn="thickn" />
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
