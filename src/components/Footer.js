import React from 'react'
import footerLogo from "../assets/footer_logo.png"
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className='footer'>
            <img src={footerLogo} alt="footer_logo" width={100} height={150} />
            <div className='fnav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservation">Reservation</Link></li>
                    <li><Link to="/orderonline">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className='contact'>
                <h5>Contact:</h5>
                <p><i class="fa-solid fa-location-dot"></i> 34th St. NY</p>
                <p><a href="mailto:littlelemon@example.com"><i class="fa-solid fa-envelope"></i>littlelemon@example.com</a></p>
                <p><a href="tel:++11115551234"><i class="fa-solid fa-phone"></i>+1 (123) 123-0123</a></p>
            </div>
            <div className='social'>
                <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i>Instagram</a><br />
                <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i>Twitter</a>
            </div>
        </footer>
    )
}

export default Footer