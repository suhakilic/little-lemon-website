import React from 'react'
import footerLogo from "../assets/footer_logo.png"


function Footer() {
    return (
        <footer className='footer'>
            <img src={footerLogo} alt="footer_logo" width={100} height={150} />
            <div className='fnav'>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order_online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div className='contact'>
                <h5>Contact:</h5>
                <p><i class="fa-solid fa-location-dot"></i> 34th St. NY</p>
                <p><a href="mailto:littlelemon@example.com"><i class="fa-solid fa-envelope"></i>littlelemon@example.com</a></p>
                <p><a href="tel:++11115551234"><i class="fa-solid fa-phone"></i>+1 (123) 123-0123</a></p>
            </div>
            <div className='social'>
                <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i>Instagram</a><br/>
                <a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i>Twitter</a>
            </div>
        </footer>
    )
}

export default Footer