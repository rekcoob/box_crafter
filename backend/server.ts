// Core Node.js Modules
import express, { Request, Response } from 'express'
import path from 'path'

// Third Party Modules
import cors from 'cors'
import dotenv from 'dotenv'

// Custom Modules
import { generateBox } from './box'
import { generateBoxOpen } from './box_open'
import { generateHalf } from './half'
import { generateHalfOpen } from './half_open'
import { generateBoxQ } from './box_q'

// Constants and Configuration
dotenv.config()
const port = process.env.PORT || 5000

// Initialize and Configure External Modules
const app = express()
app.use(express.json())
app.use(cors())

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../../frontend/dist')))

// POST /dxf Generate Regular Slotted Box
app.post('/dxf', (req: Request, res: Response) => {
  const { l, w, h, t } = req.body
  // Generate DXF
  const dxfString = generateBoxOpen(l, w, h, t)
  // For simplicity, you can just send the file content as a response
  // In a real-world scenario, you might save the file and send its URL
  // res.send({ fileContent: dxfString })
  res.send(dxfString)
})

// Generate Regular Slotted Box
app.post('/dxf/box', (req: Request, res: Response) => {
  const { l, w, h, t } = req.body
  const dxfString = generateBox(l, w, h, t)
  res.send(dxfString)
})

// Generate Open Box
app.post('/dxf/box-open', (req: Request, res: Response) => {
  const { l, w, h, t } = req.body
  const dxfString = generateBoxOpen(l, w, h, t)
  res.send(dxfString)
})

// Generate Half Box
app.post('/dxf/half', (req: Request, res: Response) => {
  const { l, w, h, t } = req.body
  const dxfString = generateHalf(l, w, h, t)
  res.send(dxfString)
})

// Generate Open Half Box
app.post('/dxf/half-open', (req: Request, res: Response) => {
  const { l, w, h, t } = req.body
  const dxfString = generateHalfOpen(l, w, h, t)
  res.send(dxfString)
})

// Generate Box-Q
app.post('/dxf/box-q', (req: Request, res: Response) => {
  const { l, w, h, t } = req.body
  const dxfString = generateBoxQ(l, w, h, t)
  res.send(dxfString)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
