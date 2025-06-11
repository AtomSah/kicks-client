import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './registration/login'
import Home from './core/public/homePage/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Login />
    <Home />
    

  )
}

export default App
