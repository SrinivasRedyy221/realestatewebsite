import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='header'>
      <Navbar/>
      <div className='intro'>
        <p>Looking for a Property!</p>
        <h1><span>Buy</span> and <span>Sell</span></h1>
        <p className='details'>hello therehere is a great thing to look for and a great place to buy and sell properties</p>
        <a href="#" className='header-btn'>Details</a>
      </div>
    </div>
  )
}

export default Header
