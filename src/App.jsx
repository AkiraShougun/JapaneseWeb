import { useState } from 'react'
import './main.css'
import Navbar from './Components/navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <h1>Hello welcome to my channel. I will be teaching you how to make a website using brainf*ck</h1>
    </>
  )
}

export default App
