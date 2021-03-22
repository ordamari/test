import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/homepage/menu-items/menu-item1.jpg'
import img2 from '../assets/images/homepage/menu-items/menu-item2.jpg'
import img3 from '../assets/images/homepage/menu-items/menu-item3.jpg'
import Featsure from './Featsure';
import List from './List';

export default function PixelPerfect(props) {

  const items = [
    {
      title: 'Seared Salmon Fillet',
      desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
      imgUrl: img1
    },
    {
      title: 'Rosemary Filet Mignon',
      desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
      imgUrl: img2
    },
    {
      title: 'Summer Fruit Chocolate Mousse',
      desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
      imgUrl: img3
    },

  ]

  return (
    <div className="pixel-perfect full">
      <div className=" main-container">
        <div className="flex container">

          <Featsure
            title="A few highlights from our menu"
            text="We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. 
          Our menu is revamped every season."
          />

          <div className="list-container">
            <List arr={items} />
          </div>
        </div>
      </div>

    </div>
  )
}

