import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route,Routes} from 'react-router-dom'
import StateBasics from './components/StateBasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/s" element={<StateBasics />} />
      </Routes>
      
      {/* <h1>Welcome</h1> */}
      
       
    </>
  )
}

export default App
