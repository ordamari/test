import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.svg'

export default function Header(props) {



  return (
    <header className='full header'>
      <div className="main-container">
        <div className="container">
          <img src={logo} alt="" />
          <h1>Exquisite dining since 1989</h1>
          <p>
            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from
            the comfort of our farmhouse.
          </p>
          <button>Book a table</button>
        </div>
      </div>
    </header>
  )
}

