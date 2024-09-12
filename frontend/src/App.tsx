import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

interface Item {
  id: number
  name: string
}

function App() {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api')
        setItems(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div>
        <h1>Array Data</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
