import React from 'react'
import logo from '../images/logo1.png'

function Navbar() {
  return (
    <nav>
        <a href="#" className='logo'>
            <img src={logo} alt="logo" />
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">agents</a></li>
            <li><a href="#">property</a></li>
            <li><a href="#">contact</a></li>
        </ul>
        <a href="#" className='property'>properties</a>
    </nav>
  )
}

export default Navbar
