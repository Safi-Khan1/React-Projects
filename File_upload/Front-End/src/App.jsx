import { useEffect, useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setCount(data.data)})
  },[])

  return (
    <>
    <Form />
    {
      (count.length > 0) ? (
        <ul>
          {count.map((item, index)=> (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        
          <h1>List is Empty</h1>
      )
    }
        
    </>
  )
}

export default App
