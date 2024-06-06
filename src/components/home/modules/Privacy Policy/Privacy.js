import React from "react";
import "./Privacy.css";
import pending from '../../../../assets/images/pending.png'

const Privacy = () => {
  return (
    <>
       <div className="privacy_page">
       <h1>Privacy Policy</h1>
       </div>
       <div className="privacy_image">
       <img src={pending} alt="pending_page"/>
       </div>
       </>
  )
};

export default Privacy;
