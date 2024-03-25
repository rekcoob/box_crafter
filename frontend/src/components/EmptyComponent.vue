<script setup>
import { ref } from 'vue'
const props = defineProps({
  foo: String
})
const emit = defineEmits(['change', 'delete'])
</script>

<!-- YourComponent.vue -->
<template>
  <div class="">
    <p>Hello</p>
  </div>
</template>

<style>
/* Component styles */
/* .buttons {
  border: solid;
} */
</style>
