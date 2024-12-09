import { useRef } from 'react'
import './App.css'

function App() {
    let a = 5;
    const refCount = useRef(0);
    console.log("Object rendered");
    function handleRef() {
        refCount.current++;
        console.log("refcount", refCount.current)
        if (refCount.current == a)
            alert("counter = " + refCount.current)
    }

    return (
        <>
            <h1>RefCount = {refCount.current}</h1>
            <button onClick={handleRef}>Increment</button>
            <p>{a}</p>
        </>
    )
}

export default App