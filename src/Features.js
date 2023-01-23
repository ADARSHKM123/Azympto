import React from 'react'
import classes from './Features.module.css';
import Returns from '../src/assets/img/Returns.svg';
import customer from '../src/assets/img/customer.svg';
import quality from '../src/assets/img/quality.svg';


function Features() {
  return (
    <div className={classes.feature}>
     <div className={classes.heading} >
         <p>Why People Choose Us</p>
     </div>
     <div className={classes.mainSections}>
         <div className={classes.sections}>
          <img src={Returns} alt="" />
          <p>Easy Returns</p>
          <div className={classes.description}>Our return policy is simple and that is why customers love our shop.</div>
         </div>
         <div className={classes.sections}>
          <img src={customer} alt="" />
          <p>Easy Returns</p>
          <div className={classes.description}>We offer amazing customer service no matter what happens.</div>
         </div>
         <div className={classes.sections}>
          <img src={quality} alt="" />
          <p>Easy Returns</p>
          <div className={classes.description}>All of our products go through very strict inspection before we dispatch them.</div>
         </div>
     </div>
    </div>
  )
}

export default Features