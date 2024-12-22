import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  function searchcity() {
    console.log(inputRef.current.value)
  }

  return (

    
      <div>
        <h1>Previsao do Tempo</h1>
        <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'></input>
        <button onClick={searchcity}>Buscar</button>
      </div>
    
  )
}

export default App
