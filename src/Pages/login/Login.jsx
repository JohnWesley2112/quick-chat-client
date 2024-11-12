import React, { useState } from 'react';
import '../../styles/style.css';
import { Link } from 'react-router-dom';
import { loginUser } from '../../apiCalls/auth';

function Signup() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser(formData);
        if (data.success) {
            localStorage.setItem('token', data.token)
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
            </form>
        </div>
    )
}

export default Signup