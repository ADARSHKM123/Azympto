import React from 'react'
// import classes from './Products.module.css';
import suncream from '../src/assets/img/suncream.svg';
import nightcream from '../src/assets/img/nightcream.svg';
import skingel from '../src/assets/img/skingel.svg';
import dryskin from '../src/assets/img/dryskin.svg';
import bodyprotection from '../src/assets/img/bodyprotection.svg';
import onegel from '../src/assets/img/onegel.svg';
import deeptreatment from '../src/assets/img/deeptreatment.svg';
import morningshine from '../src/assets/img/morningshine.svg';  

import './Products.css'

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
    <div className="sideHeader">
        <div className="sideHeaderMobile">
         <p>- Our Products</p>
         <p className="sideHeadMob">Explore our Products</p>
        </div>
         <p className="sideHead">New Arrivals</p>

         <div className="productCads">
                
                <div className="productCard">
                    <img src={suncream} alt="" />
                    <div className="Details">
                        <p className="productName">Sun Cream</p>
                        <div className="productDetails">
                            <p style={{backgroundColor:  "rgba(255, 193, 35, 0.1)", color: '#FFC123'}} className="categoryTag">SUN CARE</p>
                            <div className="productPriceDetails">
                                <span>$30</span>
                                <p>$20</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productCard tagProductOne">
                    <img src={nightcream} alt="" />
                    <div className="Details">
                        <p className="productName">Night Eye Cream</p>
                        <div className="productDetails">
                            <p style={{backgroundColor:  "rgba(41, 117, 255, 0.1)", color: '#2975FF'}} className="categoryTag">SUN CARE</p>
                            <div className="productPriceDetails">
                                <span>$100</span>
                                <p>$20</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="productCard">
                    <img src={skingel} alt="" />
                    <div className="Details">
                        <p className="productName">Acne Skin Gel</p>
                        <div className="productDetails">
                            <p style={{backgroundColor:  "rgba(255, 102, 160, 0.1)", color: '#FF66A0'}} className="categoryTag">TREATMENTS</p>
                            <div className="productPriceDetails">
                                <span></span>
                                <p>$25</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productCard">
                    <img src={dryskin} alt="" />
                    <div className="Details">
                        <p className="productName">Dry Skin Rescue</p>
                        <div className="productDetails">
                            <p style={{backgroundColor:  "rgba(0, 204, 150, 0.1)", color: '#00CC96'}} className="categoryTag">MOISTURIZERS</p>
                            <div className="productPriceDetails">
                                <span></span>
                                <p>$59</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productCard">
                    <img src={bodyprotection} alt="" />
                    <div className="Details">
                        <p className="productName">Body Protection</p>
                        <div className="productDetails">
                            <p style={{backgroundColor:  "rgba(255, 193, 35, 0.1)", color: '#FFC123'}} className="categoryTag">TREATMENTS</p>
                            <div className="productPriceDetails">
                                <span></span>
                                <p>$32</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productCard">
                    <img src={onegel} alt="" />
                    <div className="Details">
                        <p className="productName">All In One Gel</p>
                        <div className="productDetails">
                            <p style={{backgroundColor:  "rgba(41, 117, 255, 0.1)", color: '#2975FF'}} className="categoryTag">SUN CARE</p>
                            <div className="productPriceDetails">
                            <span></span>
                                <p>$79</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productCard tagProductTwo">
                    <img src={deeptreatment} alt="" />
                    <div className="Details">
                        <p className="productName">Deep Treatment</p>
                        <div className="productDetails">
                            <p style={{backgroundColor:  "rgba(255, 102, 160, 0.1)", color: ' #FF66A0'}} className="categoryTag">ON SALE</p>
                            <div className="productPriceDetails">
                                <span>$22</span>
                                <p>$17</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="productCard">
                    <img src={morningshine} alt="" />
                    <div className="Details">
                        <p className="productName">Morning Shine</p>
                        <div className="productDetails">
                            <p style={{backgroundColor:  "rgba(0, 204, 150, 0.1)", color: '#00CC96'}} className="categoryTag">NIGHT CARE</p>
                            <div className="productPriceDetails">
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