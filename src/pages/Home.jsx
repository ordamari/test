import React, { useEffect, useState } from 'react';
import Navbar from '../cmps/Navbar'
import Footer from '../cmps/Footer'
import List from '../cmps/List';
import Header from '../cmps/Header';
import FeatsureContainer from '../cmps/FeatsureContainer';
import PixelPerfect from '../cmps/PixelPerfect';
import Family from '../cmps/Family';

export default function Home(props) {

  return (
    <div className='main-container home' >
      <Header />
      <FeatsureContainer />
      <PixelPerfect />
      <Family />
      <Footer/>
    </div>
  )
}

