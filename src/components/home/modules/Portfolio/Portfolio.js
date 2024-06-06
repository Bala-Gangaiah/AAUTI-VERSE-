import React from "react";
import './Portfolio.css';
import villa_image from "../../../../assets/images/villa.png";
import tech_image from "../../../../assets/images/tech_park.png";
import premium_image from "../../../../assets/images/premium_villa.png";
import hareli_image from "../../../../assets/images/hareli.png";
import interior_image from "../../../../assets/images/villa_interior.png";
import club_image from "../../../../assets/images/club_house.png";
import meta_image from "../../../../assets/images/meta_rob.png";
import coming_image from "../../../../assets/images/coming_soon.png";
import { FaArrowRight } from "react-icons/fa6";

const Portfolio = () => {

   const data = [
       {
         id:1,
         image:villa_image,
         imageName:'Villa',
       },
       {
         id:2,
         image:tech_image,
         imageName:'Tech Park',
       },
       {
         id:3,
         image:premium_image,
         imageName:'Premium Villa',
       },
       {
         id:4,
         image:hareli_image,
         imageName:'Hareli',
       },
       {
         id:5,
         image:interior_image,
         imageName:'Villa Interios',
       },
       {
         id:6,
         image:club_image,
         imageName:'Club House',
       },
       {
         id:7,
         image:meta_image,
         imageName:'MetaRob',
       },
       {
         id:8,
         image:coming_image,
         imageName:'Coming Soon',
       },
   ]
  return (
       <div className="portfolio_page">
          <div className="heading_cont">
             <h1 className="portfolio_text">
                Our Portfolio
             </h1>
               <p className="portfolio_para_text">
               Welcome to Aautiverse, where innovation meets the extraordinary in the realm of metaverse real estate.<span className="section">As a pioneering virtual tour company,</span>
               </p>
          </div>
          <div className="portfolio-main-contain">
          <div className="portfolio_images">

            {
               data.map((item,index)=>{
                  return(
                     <div className="parent_container" key={index}>
                     <img src={item.image} alt="not found"  className="portfolio_img"/>
                     <div className="portfolio_arrange">
                      <p>{item.imageName}</p>
                      <span>Learn more<FaArrowRight/></span>
                      </div>
                      </div>
                  )
               })
            }
            </div>
          </div>
      </div>
  )
};

export default Portfolio;
