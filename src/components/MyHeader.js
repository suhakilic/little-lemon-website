import React from 'react'
import Logo from "../assets/Logo.svg"

function Myheader(){
    return(
        <header className='header'>
            <img src={Logo} alt="logo" />
        </header>
    )
}

export default Myheader