import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function plus() {
    console.log('1:', count);
    setCount(count+1)
    console.log('2:', count);
    if (count == 5){
      alert('stop')
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<div>
          count: {count}
          <button onClick={plus}> increase </button>
        </div>} />
          <Route path="/counter" element={<h1>Counter</h1>} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
