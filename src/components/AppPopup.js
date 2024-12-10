
import '../stylesheets/popup.css';

import React, { useState } from 'react'

const AppPopup = () => {

    const [closePopup, setClosePopup] = useState(false);

    const closeBtn = () => {
        setClosePopup(true)
    }

    if (closePopup) return null
    
  return (
    
    <div className='popup-div'>

        <div className='popup-cont'>
            <div className='close-banner'>
                <button onClick={closeBtn}>X</button>
            </div>

            <div className='popup-inner'>
                <h3>Introducing our Mobile App!</h3>
                <p>Introducing exclusive features on our app</p>
                <button>Downwload Now</button>
            </div>
            
        </div>
    </div>
  )
}

export default AppPopup