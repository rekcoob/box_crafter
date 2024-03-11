// Core Node.js Modules
const express = require('express')
const path = require('path')

// Third Party Modules
const cors = require('cors')
require('dotenv').config()

// Custom Modules
const { generateDxf } = require('./drawline')

// Constants and Configuration
const port = process.env.PORT || 5000

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
]
app.get('/', (req, res) => {
  // res.send('API is running')
  res.json(data)
})

// POST /dxf
app.post('/dxf', (req, res) => {
  const { l, w, h, t } = req.body

  // Generate DXF
  const dxfString = generateDxf(l, w, h, t)

  // For simplicity, you can just send the file content as a response
  // In a real-world scenario, you might save the file and send its URL
  // res.send({ fileContent: dxfString })
  res.send(dxfString)
})

app.listen(port, () => {
  console.log(`Server running  on port ${port}`)
})
