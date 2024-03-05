const express = require('express')
require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 8888

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

app.listen(port, () => {
  console.log(`Server running  on port ${port}`)
})
