import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <div className='topcontainer'>
            <header className='header'>
                <img src={Logo} alt="logo" />
            </header>
            <nav className='topnav'>
                <ul >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservation">Reservation</Link></li>
                    <li><Link to="/orderonline">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav