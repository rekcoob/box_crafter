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
    <p><strong>Outer Dimensions:</strong></p>
    <p>Length ={{ results.length }}</p>
    <p>Width = {{ results.width }}</p>
    <p>Height = {{ results.width }}</p>

    <p><strong>Format: </strong>{{ results.formatX }}x{{ results.formatY }}</p>
  </div>
</template>

<style>
.results {
  padding: 50px;
  border: solid;
}
</style>
