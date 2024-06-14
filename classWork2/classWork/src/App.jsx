import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yes from './components/Yes'
import No from './components/No'

function App() {
  const [parent, setParent] = useState(true)
  const [child, setChild] = useState(true)

  function parentbtn() {
    setParent(!parent)
  }
  function childbtn() {
    setChild(!child)
  }

  return (
    <>
      {/* <button onClick={parentbtn}>Parent</button> */}
      {/* <button onClick={childbtn}>Child</button> */}
      {child && <Yes render={parentbtn} />}
      {parent && <No render={childbtn} />}
    </>
  )
}

export default App
