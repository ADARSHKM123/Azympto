import React from 'react'
import Header from './Header'
import classes from './Hero.module.css'
import mainimg from '../src/assets/img/Hero.svg';

function Hero() {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.mainHero}>
        <div className={classes.heroLeft}>
          <p>- Skincare Products</p>
          <p>We Offer the Best <br /> Products for your Skin</p>
          <div className={classes.btn}>
            <button>Shop Now</button>
          </div>
        </div>
        <div className={classes.heroRight}>
          <img className={classes.heroImg} src={mainimg} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Hero