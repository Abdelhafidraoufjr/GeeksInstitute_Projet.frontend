import { useState } from 'react'
import './App.css'
import './components/Navbar'
import Nav from './components/Navbar'
import Blogs from './pages/blogs'

export default function App() {
  return (
    <div>
      <Nav />
      <Blogs />
    </div>
  )
}


