<script>
export default {
  data() {
    return {
      showResults: false
    }
  },
  props: {
    results: {
      length: Number,
      width: Number,
      height: Number
    },
    thickn: Number,
    boxStyle: String,
    formValid: Boolean
  },
  methods: {
    calculateFormat() {
      const { length, width, height } = this.results
      const { thickn, boxStyle } = this
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
      let format
      const boxLength = length + width + thickn * 2
      if (boxStyle === 'box') {
        format = `${boxLength * 2 + 38} x ${height + (thickn + flapHeight) * 2}`
      } else if (boxStyle === 'box-open') {
        format = `${boxLength * 2 + 38} x ${height + thickn + flapHeight}`
      } else if (boxStyle === 'half') {
        format = `${boxLength + 40} x ${height + (thickn + flapHeight) * 2}`
      } else if (boxStyle === 'half-open') {
        format = `${boxLength + 40} x ${height + thickn + flapHeight}`
      } else {
        format = `${boxLength * 2 + 38} x ${height + (thickn + flapHeight) * 2}`
      }
      return format
    },
    // Get Material Function
    getMat() {
      const mapping = {
        5: 'BC',
        4: 'C',
        3: 'B'
      }
      return mapping[this.thickn] || ''
    }
  }
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
