import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route,Routes} from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/s" element={<StateBasics />} />
        <Route path="/c" element={<Counter />} />
        <Route path="/w" element={<Welcome />} />
        <Route path="/api" element={<Api />} />
        <Route path="/poki" element={<Pokemon />} />
      </Routes>
      
      {/* <h1>Welcome</h1> */}
      
       
    </>
  )
}

export default App
