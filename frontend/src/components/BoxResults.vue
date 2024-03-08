<script>
export default {
  props: {
    results: {
      length: Number,
      width: Number,
      height: Number
    },
    thickn: Number
  },
  methods: {
    calculateFormat() {
      const { length, width, height } = this.results
      const { thickn } = this
      // Vyska Klopy pri BC a pri B, C
      const extraHeight = thickn === 5 ? width / 2 + 4 : width / 2
      const formatX = (length + width + thickn * 2) * 2 + 38
      const formatY = height + thickn + extraHeight * 2
      return `${formatX}x${formatY}`
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
  <div class="results">
    <h3>Results: {{ getMat() }}</h3>
    <p><strong>Vonkajšie rozmery krabice:</strong></p>
    <p>Dĺžka ={{ results.length + thickn * 2 }}</p>
    <p>Šírka = {{ results.width + thickn * 2 }}</p>
    <p>Výška = {{ results.height + thickn * 4 }}</p>
    <!-- +40=zalozka a -2 z length2 -->
    <p><strong>Formát: </strong>{{ calculateFormat() }}</p>
  </div>
</template>

<style>
.results {
  padding: 50px;
  border: solid;
}
</style>
