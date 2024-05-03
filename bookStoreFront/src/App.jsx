import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Landing from './pages/landing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main w-11/12 h-full bg-sky-200'>
    {/* <Landing/> */}
    
    </div>
 
  )
}

export default App
