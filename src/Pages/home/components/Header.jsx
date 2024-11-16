import React from 'react';
import './Header.css'
import { useSelector } from 'react-redux'

function Header() {
    const { user } = useSelector(state => state.userReducer);


    return (
        <header className='header'>
            <div className="logo-wrapper">
                <img className='logo' src={require('../../../images/logo.png')} alt="" />
                <small>Quick-Chat</small>
            </div>
            <div className="user">
                <h2>{user && (user.firstname + ' ' + user.lastname).toUpperCase()}</h2>
                <span>{user && (user.firstname[0] + user.lastname[0]).toUpperCase()}</span>
            </div>
        </header>
    )
}

export default Header