import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
// import Test from './Components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...'>
        <Header/>
        <Hero/>
    </div>
    
  )
}

export default App
