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

  // Blank Size Calculation based on Box Style and thickness
  // +38 = 40 glueFlap and -2 from length
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
  <div class="">
    <div class="results" :style="{ opacity: formValid ? 1 : 0 }">
      <p>
        <strong>Outer Dimensions {{ getMat() }}</strong>
      </p>
      <p>Length: {{ results.length + thickn * 2 }}</p>
      <p>Width: {{ results.width + thickn * 2 }}</p>
      <p>Height: {{ results.height + thickn * 4 }}</p>
      <p><strong>Format: </strong>{{ calculateFormat() }}</p>
    </div>
  </div>
</template>

<style scoped>
.results {
  padding: 50px;
  transition: opacity 2s ease-in-out;
}
</style>
