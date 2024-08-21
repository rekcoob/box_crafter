<script setup>
const props = defineProps({
  results: {
    length: Number,
    width: Number,
    height: Number
  },
  thickn: Number,
  boxStyle: String,
  formValid: Boolean
})

const calculateFormat = () => {
  const { length, width, height } = props.results
  const { thickn, boxStyle } = props

  // Calculate flap height based on material thickness
  let flapHeight
  if (thickn === 5) {
    flapHeight = width / 2 + 4
  } else if (thickn === 4) {
    flapHeight = width / 2 + 2
  } else {
    flapHeight = width / 2 + 1
  }

  // Blank Size Format Calculation based on Box Style and Thickness
  // +38 = 40 for glueFlap and -2 from length at the end
  const boxLength = length + width + thickn * 2
  let format
  switch (boxStyle) {
    case 'box':
      format = `${boxLength * 2 + 38} x ${height + (thickn + flapHeight) * 2}`
      break
    case 'box-open':
      format = `${boxLength * 2 + 38} x ${height + thickn + flapHeight}`
      break
    case 'half':
      format = `${boxLength + 40} x ${height + (thickn + flapHeight) * 2}`
      break
    case 'half-open':
      format = `${boxLength + 40} x ${height + thickn + flapHeight}`
      break
    default:
      format = `${boxLength * 2 + 38} x ${height + (thickn + flapHeight) * 2}`
  }
  return format
}
// Get Material Function
const getMat = () => {
  const mapping = {
    5: 'BC',
    4: 'C',
    3: 'B'
  }
  return mapping[props.thickn] || ''
}
</script>

<template>
  <div class="results_section border" :style="{ opacity: formValid ? 1 : 0 }">
    <h3>Outer Dimensions</h3>

    <p>Length: {{ results.length + thickn * 2 }} mm</p>
    <p>Width: {{ results.width + thickn * 2 }} mm</p>
    <p>Height: {{ results.height + thickn * 4 }} mm</p>
    <br />
    <p>Material: {{ getMat() }}</p>
    <br />
    <p><strong>Format: </strong>{{ calculateFormat() }} mm</p>
  </div>
</template>

<style scoped>
.results_section {
  padding: 20px 50px;
  transition: opacity 2s ease-in-out;
}

h3 {
  margin-bottom: 10px;
}
</style>
