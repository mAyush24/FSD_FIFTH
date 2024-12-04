import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/" element={<h1> all</h1>} />
          <Route path="/counter" element={<h1>Counter</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
