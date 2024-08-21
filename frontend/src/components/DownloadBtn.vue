<script setup>
import { ref } from 'vue'
import { downloadFile as downloadFileService } from '@/services/downloadFile'

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
const errorMessage = ref('')

const downloadFile = async () => {
  if (!props.formValid) {
    errorMessage.value = 'Please Fill All Dimensions!'
    return
  }
  try {
    await downloadFileService(props.results, props.thickn, props.boxStyle)
  } catch (err) {
    console.error('Error downloading file:', err)
  }
}
</script>

<template>
  <div class="download_section flex-col border">
    <!-- Error message -->
    <p v-show="!formValid" class="error-message">{{ errorMessage }}</p>
    <button class="btn-primary" :class="{ ready: formValid }" @click="downloadFile">
      Download
    </button>
  </div>
</template>

<style scoped>
.download_section {
  position: relative;
  margin: 0 20px;
}

button {
  display: inline-block;
  margin: 10px 0;
  padding: 0.5em 1em;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-primary {
  background-color: #181a1b;
  color: #1e84ff;
  border: 1px solid #007bff;
}
.btn-primary:hover {
  border-color: #0056b3;
  box-shadow: 0 0 10px #0062cc;
  opacity: 0.9;
}
.ready {
  background-color: #0056b3;
  color: #fff;
}

.error-message {
  position: absolute;
  top: 0;
  left: 0;
  /* Adjust this value to position the error message appropriately */
  margin-top: -20px;
  color: red;
}
</style>
