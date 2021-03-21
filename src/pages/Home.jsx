import React, { useEffect, useState } from 'react';
import Navbar from '../cmps/Navbar'
import Footer from '../cmps/Footer'
import List from '../cmps/List';

export default function Home(props) {

  return (
    <div className='main-container' >
      <Navbar />
      <h1>hi</h1>
      <List arr={['asdasd','asdsadasd','asdasd']} />
      <Footer/>
    </div>
  )
}

