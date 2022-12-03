import React from 'react'
import aboutimage from '../images/hero.png';

function About() {
  return (
    <div className='about'>
        <div className='about-model'>
            <img src={aboutimage} alt="about image" />
        </div>
        <div className='about-text'>
            <h2>We are the Best<br/>Reat estate Company</h2>
            <p>if you search around the hyderabad also you would only find out that the prices and responce of our agents is better and efficent</p>
            <button>View more details</button>
        </div>
      
    </div>
  )
}

export default About
