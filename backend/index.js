// Core Node.js Modules
const express = require('express')

// Third Party Modules
const cors = require('cors')
require('dotenv').config()

// Custom Modules
const { generateDxf } = require('./drawline')

// Constants and Configuration
const port = process.env.PORT || 8888

// Initialize and Configure External Modules
const app = express()
app.use(express.json())
app.use(cors())

const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Bob' },
]

app.get('/', (req, res) => {
  // res.send('API is running')
  res.json(data)
})

// POST /dxf FUNGUJE !!!!!!!!!!!!!!
app.post('/dxf', (req, res) => {
  const { l, l2, w, h, k, s } = req.body

  // Generate DXF
  const dxfString = generateDxf(l, l2, w, h, k, s)

  // For simplicity, you can just send the file content as a response
  // In a real-world scenario, you might save the file and send its URL
  // res.send({ fileContent: dxfString })
  res.send(dxfString)
})

app.listen(port, () => {
  console.log(`Server running  on port ${port}`)
})
