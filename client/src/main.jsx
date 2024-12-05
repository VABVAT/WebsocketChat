import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Chatpage from './Chatpage.jsx'



createRoot(document.getElementById('root')).render(
  <App/>
)
