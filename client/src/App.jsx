import './App.css'
import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import NavBar from './components/NavBar'
import { ThemeContext } from './context/theme.context'

function App() {

  const { theme } = useContext(ThemeContext)
  
  return (
    <div className={`app ${theme}`}>

      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>

    </div>
  )
}

export default App
