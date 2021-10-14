import React from 'react';
import Total from "../../assets/images/total.png";
import Style from "./bookingCards.module.css";
import CarWash from '../../assets/svg/car-wash.svg';
import Direction from "../../assets/svg/direction.svg";

function BookingCards() {
   return (
      <div className={Style.cardContainer}>
         <div className={Style.cardWrapper}>
         <div className={Style.topWrappper}>
            <div className={Style.topContent}>
               <img src={Total} alt="pumpImg" className={Style.cardImg} />
               <div className={Style.cardDetail}>
                  <div className={Style.cardHeading}>Total al safeer car wash pump</div>
                  <div className={Style.cardLabel}>Phone: <span>+971 23 4567</span></div>
                  <div className={Style.location}>Sharjah al nahada road</div>
               </div>
               <img src={Direction} alt="direction" className={Style.heartGreen} />
            </div>
            <div className={Style.midContent}>
               <div className={Style.midText}>Selected Service</div>
               <div className={Style.midWrapper}>
                  <div className={Style.midWrapperLeft}>
                     <img src={CarWash} alt="car" />
                     <div className={Style.text}>Car Wash</div>
                  </div>
                  <div className={Style.midWrapperRight}>
                     <div className={Style.heading}>Body Wash</div>
                     <div className={Style.description}>Reg Number: <span>Dubai - 77798</span></div>
                     <div className={Style.description}>Status: <span>Blocked</span></div>
                  </div>
               </div>
            </div>
            <div className={Style.bottomContent}>
               <div className={`${Style.bottomWrapper} ${Style.br1}`}>
                  <div className={Style.label}>Date:</div>
                  <div className={Style.date}>10, May, 2020</div>
               </div>
               <div className={Style.bottomWrapper}>
                  <div className={Style.label}>Time:</div>
                  <div className={Style.date}>5:30 PM</div>
               </div>
               <div className={`${Style.bottomWrapper} ${Style.cancelBtn}`}>Cancel</div>
            </div>
         </div>
      </div>
      </div>
   )
}

export default BookingCards;
