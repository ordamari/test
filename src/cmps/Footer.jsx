import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.svg'


export default function Footer(props) {



  return (
    <footer className='full'>

      <div className="main-container first">
        <div className="flex justify-space-between align-center">
          <h2>Ready to make a reservation?</h2>
          <button>Book a table</button>
        </div>
      </div>
      <div className="main-container">

        <div className="second flex align-start justify-space-between">
          <img src={logo} alt="" />
          <div>
            <p>Marthwaite, Sedbergh</p>
            <p>Cumbria</p>
            <p>+00 44 123 4567</p>
          </div>
          <div>
            <p>Open Times</p>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

