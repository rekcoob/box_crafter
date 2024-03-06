<script>
export default {
  props: {
    results: Object
  }
}
</script>

<template>
  <div class="results">
    <h3>Results: BC- neutral</h3>
    <p>L ={{ results.length }}</p>
    <p>W = {{ results.width }}</p>
    <p>L2 = {{ results.length2 }}</p>
    <p>H = {{ results.height }}</p>
    <p>K = {{ results.klopy }}</p>
    <p>Format: {{ results.formatX }}x{{ results.formatY }}</p>
  </div>
</template>

<style>
.results {
  padding: 50px;
  border: solid;
}
</style>
