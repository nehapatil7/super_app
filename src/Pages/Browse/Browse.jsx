import './Browse.css'
import icon from '../../Images/icon.png'

import React from 'react'

function Browse() {
  return (
    <div className='container4'>
        <div className='icon'>
            <h4>Super App</h4>
            <img src={icon} alt="icon" />
        </div>

        <div className='movies'>
            <p>Entertainment according to your choice</p>
        </div>
        
    </div>
  )
}

export default Browse