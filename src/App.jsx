import { useState } from 'react'
import './App.css'
import './components/Navbar'
import Nav from './components/Navbar'
import Home from './pages/home'
export default function App() {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  )
}


