import React, { useEffect, useState } from 'react';
import Featsure from './Featsure';
import img1 from '../assets/images/homepage/enjoyable-place-desktop.jpg'
import img2 from '../assets/images/homepage/locally-sourced-desktop.jpg'
import pattern1 from '../assets/images/patterns/pattern-curve-top-left.svg'
import pattern2 from '../assets/images/patterns/pattern-lines.svg'

export default function FeatsureContainer(props) {



  return (
    <div className="featsure-container full">
      <img className="pattern1" src={pattern1} alt=""/>
      <img className="pattern2" src={pattern2} alt=""/>
      <div className="main-container">
        <div className="flex justify-space-between align-center first">
          <img className="main" src={img1} alt="" />
          <Featsure
            text="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
          a tour of the farm before your meal."
            title="Enjoyable place for all the family"
          />
        </div>
        <div className="flex justify-space-between align-center second">
          <Featsure
            text="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re 
          eating the freshest, most sustainable food."
            title="The most locally sourced food"
          />
          <img className="main" src={img2} alt="" />
        </div>
      </div>
    </div>

  )
}

