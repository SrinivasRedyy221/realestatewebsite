import React from 'react'
import Property from './Property'
import pimage1 from '../images/p1.png'
import pimage2 from '../images/p2.png'
import pimage3 from '../images/p3.png'

function Proporties() {
  return (
    <div className='product'>
        <div className='p-heading'>
            <h3>Properties</h3>
            <p>This are few of our company and our clints listed properties listed</p>
        </div>
        <div className='product-container'>
            <Property image={pimage1} name='hayathnagar' price='70lakh'/>
            <Property image={pimage3} name='vanasthalipuram' price='1.5crore'/>
            <Property image={pimage2} name='abdullapur metu'price='57lakh'/>

        </div>
      
    </div>
  )
}

export default Proporties
