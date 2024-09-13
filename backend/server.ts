import express, { Request, Response } from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
const PORT = 5000

// Middleware
app.use(express.json())
app.use(cors())

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../../frontend/dist')))

interface Person {
  id: number
  name: string
}

const data: Person[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Fred' },
]

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running')
})

app.get('/api', (req: Request, res: Response) => {
  res.json(data)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
