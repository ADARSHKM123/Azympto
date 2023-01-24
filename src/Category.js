import React from 'react'
import classes from './Category.module.css';
import onsale from '../src/assets/img/onsale.svg';
import Featured from '../src/assets/img/Featured.svg';
import masks from '../src/assets/img/masks.svg';
import eyecare from '../src/assets/img/eyecare.svg';
import moistraizers from '../src/assets/img/moistraizers.svg';
import treatments from '../src/assets/img/treatments.svg';
import nightcare from '../src/assets/img/nightcare.svg';
import Suncare from '../src/assets/img/Suncare.svg';
import leftarrow from '../src/assets/img/leftarrow.svg';
import rightarrow from '../src/assets/img/rightarrow.svg';

function Category() {
    return (
        <div className={classes.sideHeader}>
            <p>- The Categories</p>
            <p>Browse by Category</p>
            <div className={classes.mobileCategory}>
            <div className={classes.mobileCategoryCards}>
             <div className={classes.categoryCard}><img src={onsale} alt=''></img><span>On Sale</span></div>
             <div className={classes.categoryCard}><img src={Featured} alt=''></img><span>Featured</span></div>
            </div>
             <div className={classes.scrolling}>
                 <img src={leftarrow} alt="" />
                 <img src={rightarrow} alt="" />
             </div>
            </div>
            <div className={classes.categoryList}>
                <div className={classes.categoryCard}><img src={onsale} alt=''></img><span>On Sale</span></div>
                <div className={classes.categoryCard}><img src={Featured} alt=''></img><span>Featured</span></div>
                <div className={classes.categoryCard}><img src={masks} alt=''></img><span>Masks</span></div>
                <div className={classes.categoryCard}><img src={eyecare} alt=''></img><span>Eye Care</span></div>
                <div className={classes.categoryCard}><img src={moistraizers} alt=''></img><span>Moisturizers</span></div>
                <div className={classes.categoryCard}><img src={treatments} alt=''></img><span>Treatments</span></div>
                <div className={classes.categoryCard}><img src={nightcare} alt=''></img><span>Night Care</span></div>
                <div className={classes.categoryCard}><img src={Suncare} alt=''></img><span>Sun Care</span></div>
            </div>
        </div>
    )
}

export default Category