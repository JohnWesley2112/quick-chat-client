import React, { useState } from 'react';
import '../../styles/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../apiCalls/auth';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../../redux/loaderSlice';

function Signup() {
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let response = null;
        try {
            dispatch(showLoader());
            response = await loginUser(formData);
            if (response.success) {
                dispatch(hideLoader());
                localStorage.setItem('token', response.token)
                window.dispatchEvent(new Event('storage'))
                navigate('/')
                toast.success(response.message)
                window.location.reload()
            } else {
                dispatch(hideLoader());
                toast.error(response.message)
            }
        } catch (error) {
            dispatch(hideLoader());
            toast.error(response.message)
        }
    }

    return (
        <div className='component-container'>
            <form onSubmit={handleSubmit} className='form signup-form'>
                <input className='form-inp' placeholder='Email' type="email" name="email" onChange={handleChange} required />
                <div className="toggle-password-wrapper">
                    <input className='form-inp password-inp' placeholder='Password' type={isVisible ? "text" : "password"} name="password" minLength={8} onChange={handleChange} required />
                    <button onClick={() => { setIsVisible(!isVisible) }} className='eye-toggle-btn' type="button"><img src={isVisible ? require('../../images/eye-closed.png') : require('../../images/eye-open.png')} alt="" /></button>
                </div>
                <div className="form-submit-btn-wrapper">
                    <button type="submit">Login</button>
                </div>
                <div className="quick-link-wrapper">
                    <span>Don't have an account?</span>
                    <Link to='/signup'>Signup</Link>
                </div>
                <button onClick={() => navigate('/')} className='go-to-home' type="button">
                    <img src={require('../../images/home.png')} alt="" />
                </button>
            </form>
        </div>
    )
}

export default Signup