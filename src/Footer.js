import React from 'react'
import classes from './Footer.module.css'
import logo from '../src/assets/img/logo.svg';
import Instagram from '../src/assets/img/Instagram.svg';
import twitter from '../src/assets/img/twitter.svg';
import Facebook from '../src/assets/img/Facebook.svg';

function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.majorFooter}>
        <img className={classes.footerLogo} src={logo} alt=""></img>
        <p>© 2020 - All rights reserved</p>
        <div className={classes.socialmedia} >
            <ul>
                <li><img src={Instagram} alt="" /></li>
                <li><img src={twitter} alt="" /></li>
                <li><img src={Facebook} alt="" /></li>
            </ul>
        </div>
        </div>
        <div className={classes.sideOne}>
            <p>Legal</p>
            <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className={classes.sideTwo}>
            <p>Company</p>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Team</a></li>    
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer