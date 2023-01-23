import React from 'react'
import logo from '../src/assets/img/logo.svg';
import search from '../src/assets/img/search.svg';
import cart from '../src/assets/img/cart.svg';
import Profile from '../src/assets/img/Profile.svg';

import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.header}>
      <img src={logo} alt=""></img>
      <nav>
        <ul>
          <li><a href="#search"><img src={search} alt=""></img></a></li>
          <li><a href="#cart"><img src={cart} alt=""></img></a></li>
          <li><a href="#profile"><img src={Profile} alt=""></img></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header