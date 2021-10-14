import React from 'react';
import Style from "./favorites.module.css";
import FavoriteCards from "../../components/favoriteCards/FavoriteCards";
import BlackArrow from "../../assets/svg/blackArrow.svg"
import { Link } from 'react-router-dom'

function Services() {
   return (
      <>
         <div className={Style.home}>
            <div className={Style.topHeading}><Link to="/menu"><img src={BlackArrow} alt="hamburger" className={`mr-3`} /></Link>Favourites</div>
            <div className={Style.cardMain}>
               <FavoriteCards />
               <FavoriteCards />
               <FavoriteCards />
               <FavoriteCards />
               <FavoriteCards />
               <FavoriteCards />
            </div>
         </div>
         
      </>
   )
}

export default Services
