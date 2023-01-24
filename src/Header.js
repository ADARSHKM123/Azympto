import React from 'react'
import logo from '../src/assets/img/logo.svg';
import search from '../src/assets/img/search.svg';
import cart from '../src/assets/img/cart.svg';
import Profile from '../src/assets/img/Profile.svg';
import mobileLogo from '../src/assets/img/mobileLogo.svg';
import hamburger from '../src/assets/img/hamburger.svg';

import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.header}>
      <img className={classes.webLogo} src={logo} alt=""></img>
      <div className={classes.mobViewHead}>
        <img className={classes.hamburger} src={hamburger} alt="" />
       <img src={mobileLogo} alt="" />
       <img src={cart} alt="" />
      </div>
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