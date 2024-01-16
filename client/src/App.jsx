import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Login/>
      <Footer/>
    </>
  )
}

export default App
