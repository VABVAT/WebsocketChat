import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Roompage from './Roompage';
import Chatpage from './Chatpage';
import SocketContextProvider from './Webcontext.jsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <SocketContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Roompage />}></Route>
          <Route path='/chat'  element={<Chatpage />}></Route>
        </Routes>
      </BrowserRouter>
  </SocketContextProvider>
  )
}

export default App
