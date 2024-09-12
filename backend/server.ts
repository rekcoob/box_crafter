import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors())

// Get /
const data = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Fred' },
]

app.get('/', (req, res) => {
  res.send('API is running')
})

app.get('/api', (req, res) => {
  res.json(data)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
