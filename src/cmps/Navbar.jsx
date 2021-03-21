import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar(props) {



  return (
    <nav className='full'>
      <div className="main-container">
        <div className='flex justify-space-between align-center'>
          <Link className='logo' to={'/'} >logo</Link>
          <div>
            <div className='flex align-center'>
              <Link to={'/'}>one</Link>
              <Link to={'/'}>two</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

