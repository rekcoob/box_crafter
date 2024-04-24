<script setup>
import { ref, computed } from 'vue'
import MaterialButtons from '@/components/MaterialButtons.vue'
import DimensionsInput from '@/components/DimensionsInput.vue'
import BoxStyles from '@/components/BoxStyles.vue'
import BoxResults from '@/components/BoxResults.vue'
import DownloadBtn from '@/components/DownloadBtn.vue'

const inputs = ref({
  length: null,
  width: null,
  height: null
})
const thickn = ref(5)
const boxStyle = ref('box')
const formValid = ref(false)

const processedInputs = computed(() => {
  const { length, width, height } = inputs.value
  // If Width > Length => Swap them
  if (width > length) {
    return {
      length: width,
      width: length,
      height: height
    }
  } else {
    return inputs.value
  }
})

const handleInputsChange = (data) => {
  inputs.value = data.inputs
  formValid.value = data.formValid
}

const handleThicknChange = (t) => {
  thickn.value = t
}

const updateSelectedOption = (option) => {
  boxStyle.value = option
}
</script>

<template>
  <h2>Box Crafter</h2>

  <div class="container">
    <div class="inputs">
      <div class="input-section">
        <MaterialButtons @thicknChanged="handleThicknChange" />
        <DimensionsInput @inputsChanged="handleInputsChange" />
      </div>
      <BoxStyles @optionSelected="updateSelectedOption" />
    </div>
    <DownloadBtn
      :results="processedInputs"
      :thickn="thickn"
      :boxStyle="boxStyle"
      :formValid="formValid"
    />
    <BoxResults
      :results="processedInputs"
      :thickn="thickn"
      :boxStyle="boxStyle"
      :formValid="formValid"
    />
  </div>
</template>

<style scoped>
.input-section {
  display: flex;
  flex-direction: column;
}
.inputs {
  display: flex;
}
</style>
