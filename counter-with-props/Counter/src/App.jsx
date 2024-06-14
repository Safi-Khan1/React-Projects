import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    { count > 0 && setCount(count - 1) }
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Count : {count}</p>
      <Increment Increment={increment} />
      <Decrement Decrement={decrement} />
    </>
  )
}

export default App
function Increment(props) {
  return (
    <button onClick={props.Increment}>Increment</button>
  )
}
function Decrement(props) {
  return (
    <button onClick={props.Decrement}>Decrement</button>
  )
}
