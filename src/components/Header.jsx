import React from 'react'
import './Header.css'
import logo from '../chef-icon.png'

function Header() {
    return (
        <header className='nav'>
            <img className='logo-img' src={logo} />
            <h1>chef mal<span style={{color: "#2ba360"}}>ai</span></h1>
        </header>
    )
}

export default Header;