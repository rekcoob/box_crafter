<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<template>
  <div v-if="show" class="box-image">
    <img :src="image" alt="image" />
  </div>
</template>

<style>
.box-image {
  padding: 50px;
  border: solid;
}
</style>
