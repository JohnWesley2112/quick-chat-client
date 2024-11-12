import React from 'react'
import './App.css'
import Home from './Pages/home/Home'
import Signup from './Pages/signup/Signup'
import Login from './Pages/login/Login'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App