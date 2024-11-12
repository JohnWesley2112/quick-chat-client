import React, { useState } from 'react';
import '../../styles/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../../apiCalls/auth';

function Signup() {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate()
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
        const data = await signupUser(formData);
        if (data.success) {
            navigate('/login')
        }
    }

    return (
        <div className='component-container'>
            <form onSubmit={handleSubmit} className='form signup-form'>
                <input className='form-inp' placeholder='Firstname' type="text" name="firstname" minLength={3} onChange={handleChange} required />
                <input className='form-inp' placeholder='Lastname' type="text" name="lastname" minLength={3} onChange={handleChange} required />
                <input className='form-inp' placeholder='Email' type="email" name="email" onChange={handleChange} required />
                <div className="toggle-password-wrapper">
                    <input className='form-inp password-inp' placeholder='Password' type={isVisible ? "text" : "password"} name="password" minLength={8} onChange={handleChange} required />
                    <button
                        onClick={() => { setIsVisible(!isVisible) }}
                        type='button'
                        className='eye-toggle-btn' >
                        <img
                            src={isVisible ? require('../../images/eye-closed.png') :
                                require('../../images/eye-open.png')}
                            alt="" />
                    </button>
                </div>
                <div className="form-submit-btn-wrapper">
                    <button type="submit">Signup</button>
                </div>
                <div className="quick-link-wrapper">
                    <span>Have an account?</span>
                    <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Signup