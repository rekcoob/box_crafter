// Core Node.js Modules
const express = require('express')
const path = require('path')

// Third Party Modules
const cors = require('cors')
require('dotenv').config()

// Custom Modules
const { generateBox } = require('./box.js')
const { generateBoxOpen } = require('./box_open.js')
const { generateHalf } = require('./half.js')
const { generateHalfOpen } = require('./half_open.js')
const { generateBoxQ } = require('./box_q.js')

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

// POST /dxf Generate Regular Slotted Box
app.post('/dxf', (req, res) => {
  const { l, w, h, t } = req.body
  // Generate DXF
  const dxfString = generateBoxOpen(l, w, h, t)
  // For simplicity, you can just send the file content as a response
  // In a real-world scenario, you might save the file and send its URL
  // res.send({ fileContent: dxfString })
  res.send(dxfString)
})

// Generate Regular Slotted Box
app.post('/dxf/box', (req, res) => {
  const { l, w, h, t } = req.body
  // Generate DXF
  const dxfString = generateBox(l, w, h, t)
  res.send(dxfString)
})

// Generate Open Box
app.post('/dxf/box-open', (req, res) => {
  const { l, w, h, t } = req.body
  // Generate DXF
  const dxfString = generateBoxOpen(l, w, h, t)
  res.send(dxfString)
})

// Generate Half
app.post('/dxf/half', (req, res) => {
  const { l, w, h, t } = req.body
  // Generate DXF
  const dxfString = generateHalf(l, w, h, t)
  res.send(dxfString)
})

// Generate Open Half Box
app.post('/dxf/half-open', (req, res) => {
  const { l, w, h, t } = req.body
  // Generate DXF
  const dxfString = generateHalfOpen(l, w, h, t)
  res.send(dxfString)
})

// Generate Box-Q
app.post('/dxf/box-q', (req, res) => {
  const { l, w, h, t } = req.body
  // Generate DXF
  const dxfString = generateBoxQ(l, w, h, t)
  res.send(dxfString)
})

app.listen(port, () => {
  console.log(`Server running  on port ${port}`)
})
