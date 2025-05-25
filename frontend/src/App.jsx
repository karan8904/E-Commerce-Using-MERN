import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Register />} path='/register' />
          <Route element={<Login />} path='/login' />
        </Routes>
      </Router>
    </>
  )
}

export default App
