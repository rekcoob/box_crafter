<script>
import MaterialButtons from '@/components/MaterialButtons.vue'
import DimensionsInput from '@/components/DimensionsInput.vue'
import BoxStyles from '@/components/BoxStyles.vue'
import BoxResults from '@/components/BoxResults.vue'
import DownloadBtn from '@/components/DownloadBtn.vue'

export default {
  name: 'App',
  components: {
    MaterialButtons,
    DimensionsInput,
    BoxStyles,
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
      boxStyle: 'box',
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
    },
    updateSelectedOption(option) {
      this.boxStyle = option
    }
  }
}
</script>

<template>
  <h2>BigBox Crafter ♥</h2>

  <div class="container">
    <!-- <p>BoxStyle {{ boxStyle }}</p> -->
    <div class="inputs">
      <div class="input-section">
        <!-- <DimensionsInput @input="length = $event.target.value" /> -->
        <MaterialButtons @thicknChanged="handleThicknChange" />
        <DimensionsInput
          @inputsChanged="handleInputsChange"
          @form-validity-changed="updateButtonColor"
        />
      </div>
      <BoxStyles @optionSelected="updateSelectedOption" />
    </div>
    <DownloadBtn :results="inputs" :thickn="thickn" :boxStyle="boxStyle" :formValid="formValid" />
    <BoxResults :results="inputs" :thickn="thickn" :formValid="formValid" />
    <BoxImage />
  </div>
</template>

<style scoped>
.input-section {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /*border: solid;*/
}
.inputs {
  display: flex;
}
</style>
