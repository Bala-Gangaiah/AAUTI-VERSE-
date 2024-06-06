import React from "react";
import "./Welcome.css";
import { FaArrowRight } from "react-icons/fa6";

const Welcome = () => {
  return (
      <div className="welcome_title">
        <div className="welcome_container"></div>
        <div className="welcome_content">
          <div className="text">
          <h1 className="heading_text">Welcome to Aautiverse</h1>
          <div className="para_container">
          <p className="para_text">
          Step into immersive metaverse real estate platform. Now, you can explore and experience properties virtually from anywhere through at desk and mobile phones.
          </p>
          <button className="btn_live_demo">Book Live Demo<FaArrowRight/></button>
        </div>
        </div>
        <div className="video_player">
           <video width="100%" autoPlay muted loop>
             <source src="https://v.ftcdn.net/06/80/53/61/700_F_680536124_vOhP3Dm5Y0bDdlvRiK86fZpQH15m0MbG_ST.mp4"  type="video/mp4"></source>
           </video>
        </div>
      </div> 
      </div>
  );
};
 
export default Welcome;
