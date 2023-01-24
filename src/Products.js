import React from 'react'
import classes from './Products.module.css';
import suncream from '../src/assets/img/suncream.svg';
import nightcream from '../src/assets/img/nightcream.svg';
import skingel from '../src/assets/img/skingel.svg';
import dryskin from '../src/assets/img/dryskin.svg';
import bodyprotection from '../src/assets/img/bodyprotection.svg';
import onegel from '../src/assets/img/onegel.svg';
import deeptreatment from '../src/assets/img/deeptreatment.svg';
import morningshine from '../src/assets/img/morningshine.svg';  


const OurProducts = [
    {
        name:'Sun Cream',
        price:20,
        category:'SUN CARE',
        crossPrice:30,
        img:suncream
    },
    {
        name:'Night Eye Cream',
        price:50,
        category:'EYE CARE',
        crossPrice:100,
        img:nightcream
    },
    {
        name:'Acne Skin Gel',
        price:25,
        category:'TREATMENTS',
        img:skingel
    },
    {
        name:'Dry Skin Rescue',
        price:59,
        category:'MOISTURIZERS',
        img:dryskin
    },
    {
        name:'Body Protection',
        price:32,
        category:'TREATMENTS',
        img:bodyprotection
    },
    {
        name:'All In One Gel',
        price:79,
        category:'FEATURED',
        img:onegel
    },
    {
        name:'Deep Treatment',
        price:17,
        category:'ON SALE',
        crossPrice:22,
        img:deeptreatment
    },
    {
        name:'Morning Shine',
        price:14,
        category:'NIGHT CARE',
        img:morningshine
    }
]



function Products() {
  return (
    <div className={classes.sideHeader}>
        <div className={classes.sideHeaderMobile}>
         <p>- Our Products</p>
         <p className={classes.sideHeadMob}>Explore our Products</p>
        </div>
         <p className={classes.sideHead}>New Arrivals</p>
         {/* <div className={classes.productCads}>
             
         {
             OurProducts.map((item,i)=>
                <div key={i} className={classes.productCard}>
                <img src={item.img} alt="" />
                <div className={classes.Details}>
                    <p className={classes.productName}>{item.name}</p>
                    <div className={classes.productDetails}>
                        <p>{item.category}</p>
                        <div className={classes.productPriceDetails}>
                            <span>{item.crossPrice ? `${item.crossPrice}` :''}</span>
                            <p>${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
             )
         }

         </div> */}

         <div className={classes.productCads}>
                
                <div className={classes.productCard}>
                    <img src={suncream} alt="" />
                    <div className={classes.Details}>
                        <p className={classes.productName}>Sun Cream</p>
                        <div className={classes.productDetails}>
                            <p style={{backgroundColor:  "rgba(255, 193, 35, 0.1)", color: '#FFC123'}} className={classes.categoryTag}>SUN CARE</p>
                            <div className={classes.productPriceDetails}>
                                <span>$30</span>
                                <p>$20</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.productCard}>
                    <img src={nightcream} alt="" />
                    <div className={classes.Details}>
                        <p className={classes.productName}>Night Eye Cream</p>
                        <div className={classes.productDetails}>
                            <p style={{backgroundColor:  "rgba(41, 117, 255, 0.1)", color: '#2975FF'}} className={classes.categoryTag}>SUN CARE</p>
                            <div className={classes.productPriceDetails }>
                                <span>$100</span>
                                <p>$20</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={classes.productCard}>
                    <img src={skingel} alt="" />
                    <div className={classes.Details}>
                        <p className={classes.productName}>Acne Skin Gel</p>
                        <div className={classes.productDetails}>
                            <p style={{backgroundColor:  "rgba(255, 102, 160, 0.1)", color: '#FF66A0'}} className={classes.categoryTag}>TREATMENTS</p>
                            <div className={classes.productPriceDetails}>
                                <span></span>
                                <p>$25</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.productCard}>
                    <img src={dryskin} alt="" />
                    <div className={classes.Details}>
                        <p className={classes.productName}>Dry Skin Rescue</p>
                        <div className={classes.productDetails}>
                            <p style={{backgroundColor:  "rgba(0, 204, 150, 0.1)", color: '#00CC96'}} className={classes.categoryTag}>MOISTURIZERS</p>
                            <div className={classes.productPriceDetails}>
                                <span></span>
                                <p>$59</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.productCard}>
                    <img src={bodyprotection} alt="" />
                    <div className={classes.Details}>
                        <p className={classes.productName}>Body Protection</p>
                        <div className={classes.productDetails}>
                            <p style={{backgroundColor:  "rgba(255, 193, 35, 0.1)", color: '#FFC123'}} className={classes.categoryTag}>TREATMENTS</p>
                            <div className={classes.productPriceDetails}>
                                <span></span>
                                <p>$32</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.productCard}>
                    <img src={onegel} alt="" />
                    <div className={classes.Details}>
                        <p className={classes.productName}>All In One Gel</p>
                        <div className={classes.productDetails}>
                            <p style={{backgroundColor:  "rgba(41, 117, 255, 0.1)", color: '#2975FF'}} className={classes.categoryTag}>SUN CARE</p>
                            <div className={classes.productPriceDetails}>
                            <span></span>
                                <p>$79</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.productCard}>
                    <img src={deeptreatment} alt="" />
                    <div className={classes.Details}>
                        <p className={classes.productName}>Deep Treatment</p>
                        <div className={classes.productDetails}>
                            <p style={{backgroundColor:  "rgba(255, 102, 160, 0.1)", color: ' #FF66A0'}} className={classes.categoryTag}>ON SALE</p>
                            <div className={classes.productPriceDetails}>
                                <span>$22</span>
                                <p>$17</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.productCard}>
                    <img src={morningshine} alt="" />
                    <div className={classes.Details}>
                        <p className={classes.productName}>Morning Shine</p>
                        <div className={classes.productDetails}>
                            <p style={{backgroundColor:  "rgba(0, 204, 150, 0.1)", color: '#00CC96'}} className={classes.categoryTag}>NIGHT CARE</p>
                            <div className={classes.productPriceDetails}>
                            <span></span>
                                <p>$14</p>
                            </div>
                        </div>
                    </div>
                </div>  
             </div>
             
    </div>
  )
}

export default Products