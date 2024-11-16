import React from 'react'
import './App.css'
import Home from './Pages/home/Home'
import Signup from './Pages/signup/Signup'
import Login from './Pages/login/Login'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes';

// Redux Imports
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

// Loader Component
import Loader from './components/loader'

function App() {
    const { loader } = useSelector(state => state.loaderReducer);

    return (
        <div className='container'>
            <Toaster
                toastOptions={{
                    duration: 2500
                }}
                position="top-center" />
            {loader && <Loader />}
            <Routes>
                <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    )
}

export default App

