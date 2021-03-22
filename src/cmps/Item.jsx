import React, { useEffect, useState } from 'react';
import minus from '../assets/images/icons/icon-minus.svg'

export default function Item({ item }) {



  return (
    <div className="item flex">
      <div className="flex align-start">
      <img className="main-img" src={item.imgUrl} alt=""/>
      <img className="minus" src={minus} alt=""/>
      </div>
      <div >
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      </div>
    </div>
  )
}

