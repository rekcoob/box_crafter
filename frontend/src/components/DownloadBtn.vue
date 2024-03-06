<script>
import axios from 'axios'

export default {
  props: {
    results: {
      length: Number,
      length2: Number,
      width: Number,
      height: Number,
      klopy: Number, //BC
      spary: Number, //BC
      formatX: Number, // +40=zalozka a -2 z length2
      formatY: Number
    }
  },
  data() {
    return {
      // l: 805,
      // l2: 603,
      // w: 505,
      // h: 405,
      // k: 254,
      // s: 4
    }
  },
  methods: {
    async downloadFile() {
      try {
        const response = await axios.post(
          'http://localhost:8888/dxf',
          {
            l: this.results.length,
            l2: this.results.length2,
            w: this.results.width,
            h: this.results.height,
            k: this.results.klopy,
            s: this.results.spary
          },
          {
            responseType: 'blob' // Important! This tells Axios to treat the response as a binary blob
          }
        )

        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'output.dxf') // Set the filename and extension of your file
        document.body.appendChild(link)
        link.click()
      } catch (error) {
        console.error('Error downloading file:', error)
      }
    }
  }
}
</script>

<template>
  <button class="btn-primary" @click="downloadFile">Download</button>
  <p>Length ={{ results.length }}</p>
  <p>Length2 ={{ results.length2 }}</p>
  <p>Width = {{ results.width }}</p>
  <p>Height = {{ results.height }}</p>
  <p>Klopy = {{ results.klopy }}</p>
  <p>Spary = {{ results.spary }}</p>
</template>

<style scoped>
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
}
</style>
