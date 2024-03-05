<script>
import axios from 'axios'

export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        // const response = await axios.get('http://localhost:YOUR_NODE_SERVER_PORT/api/data')
        const response = await axios.get('http://localhost:8888/')
        this.items = response.data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <p>Yo</p>
      <ul v-for="item in items" :key="item.id">
        <li>{{ item.name }}</li>
      </ul>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped></style>
