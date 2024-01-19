import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Welcome from './pages/Welcome'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'


function App() {

  return (

    <div>
        <Header />
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/Login' element={<Login />} />
         
        </Routes>
    </div>
    
  )
}

export default App
