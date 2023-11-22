import React from 'react'
import footerLogo from "../assets/footer_logo.png"


function Footer() {
    return (
        <footer>
            <img src={footerLogo} alt="footer_logo" width={100} height={150} />
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order_online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <address>
                <h5>Contact:</h5>
                <p>34th St. NY</p>
                <a href="mailto:littlelemon@example.com">littlelemon@example.com</a><br />
                <a href="tel:++11115551234">+1 (123) 123‑0123</a>
            </address>
            <div>
                <a href="">Instagram</a><br/>
                <a href="">Twitter</a>
            </div>

        </footer>
    )
}

export default Footer