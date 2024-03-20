<script>
import axios from 'axios'

export default {
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
  data() {
    return {
      errorMessage: ''
    }
  },
  methods: {
    async downloadFile() {
      try {
        if (!this.formValid) {
          // If form is not valid, display error message and return
          this.errorMessage = 'Ferenc, Vyplň vsetky rozmery!'
          return
        }
        const thicknessMap = {
          5: 'BC',
          4: 'C',
          3: 'B'
        }
        const filename = `${this.results.length}x${this.results.width}x${this.results.height}_${thicknessMap[this.thickn] || 'output'}.dxf`

        // https://vitejs.dev/guide/env-and-mode.html
        let apiUrl

        if (import.meta.env.MODE === 'production') {
          // Production mode
          apiUrl = `dxf/${this.boxStyle}`
        } else {
          // Development mode
          apiUrl = `http://localhost:5000/dxf/${this.boxStyle}`
        }

        const response = await axios.post(
          apiUrl,
          {
            l: this.results.length,
            w: this.results.width,
            h: this.results.height,
            t: this.thickn
          },
          {
            // Important! This tells Axios to treat the response as a binary blob
            responseType: 'blob'
          }
        )
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url

        // Set the filename and extension of your file
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
      } catch (err) {
        console.error('Error downloading file:', err)
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- Error message -->
    <p v-show="!formValid" class="error-message">{{ errorMessage }}</p>

    <button class="btn-primary" :class="{ ready: formValid }" @click="downloadFile">
      Stiahnuť
    </button>
  </div>
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
  opacity: 0.9;
}
.ready {
  background-color: #0056b3;
  color: #fff;
}

.container {
  position: relative;
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
