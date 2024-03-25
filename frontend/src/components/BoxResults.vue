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

  // Flap Height Depending on Material Thickness
  let flapHeight
  if (thickn === 5) {
    flapHeight = width / 2 + 4
  } else if (thickn === 4) {
    flapHeight = width / 2 + 2
  } else {
    flapHeight = width / 2 + 1
  }

  // Format Calculation Depending on Box Style
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
        <strong>Vonkajšie rozmery krabice {{ getMat() }}</strong>
      </p>
      <p>Dĺžka: {{ results.length + thickn * 2 }}</p>
      <p>Šírka: {{ results.width + thickn * 2 }}</p>
      <p>Výška: {{ results.height + thickn * 4 }}</p>
      <!-- +40 zalozka a -2 z length2 -->
      <p><strong>Formát: </strong>{{ calculateFormat() }}</p>
    </div>
  </div>
</template>

<style scoped>
.results {
  padding: 50px;
  /* border: solid; */
  transition: opacity 2s ease-in-out;
}
</style>
