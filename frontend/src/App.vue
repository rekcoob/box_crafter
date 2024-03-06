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
      thickn: 50
    }
  },
  computed: {
    resultDimensions() {
      const { length, width, height } = this.inputs
      return {
        length: length + 5,
        length2: length + 3,
        width: width + 5,
        height: height + 5,
        klopy: width / 2 + 4, //BC
        formatX: (length + width) * 2 + 38, // +40=zalozka a -2 z length2
        formatY: height + (width / 2 + 4), // zjednodusit?
        spary: 4
      }
    }
  },
  methods: {
    handleInputsChange(inputs) {
      console.log('Inputs: ', inputs)
      this.inputs = inputs
    },
    handleThicknChange(th) {
      this.thickn = th
      // Now you can do whatever you want with the updated thickn value
      console.log('Thickness changed to:', th)
    }
  }
}
</script>

<template>
  <h2>BigBox Crafter</h2>
  <p>thickness : {{ thickn }}</p>
  <div class="container">
    <div class="input-section">
      <MaterialButtons @thicknChanged="handleThicknChange" />
      <!-- <DimensionsInput @input="length = $event.target.value" /> -->
      <DimensionsInput @inputsChanged="handleInputsChange" />
    </div>
    <DownloadBtn :results="resultDimensions" />
    <BoxResults :results="resultDimensions" />
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
