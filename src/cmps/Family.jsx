import React, { useEffect, useState } from 'react';
import img from '../assets/images/homepage/family-gathering-desktop.jpg'
import pattern1 from '../assets/images/patterns/pattern-lines.svg'
import pattern2 from '../assets/images/icons/icon-minus.svg'

export default function Family(props) {



  return (
    <div className="full family">

      <div className="main-container">

        <div className='flex align-center justify-space-between container' >
          <img className="pattern1" src={pattern1} alt=""/>
          <img className="main" src={img} alt="" />
          <div className="text-container">
            <h2>Family Gathering</h2>
            <p className="desc">
              We love catering for entire families. So please bring everyone along for a special meal with your
              loved ones. We’ll provide a memorable experience for all.
        </p>
            <button>Book a table</button>
            <div className="pattern2-container">
            <img src={pattern2} alt=""/>
            <p>Family Gathering</p>
            </div>
            <p>Special Events</p>
            <p>Social Events</p>
          </div>
        </div>
      </div>
    </div>

  )
}

