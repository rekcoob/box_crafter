// Core Node.js Modules
const express = require('express')
const path = require('path')

// Third Party Modules
const cors = require('cors')
require('dotenv').config()

// Constants and Configuration
const port = 5000

// Initialize and Configure External Modules
const app = express()
app.use(express.json())
app.use(cors())

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/dist')))

// Get /
const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Fred' },
]

app.get('/api', (req, res) => {
  // res.send('API is running')
  res.json(data)
})

app.listen(port, () => {
  console.log(`Server running  on port ${port}`)
})
