import React from "react";
import "./Terms.css";
import pending from '../../../../assets/images/pending.png'

const Terms = () => {
         return (
    <>
       <div className="terms_page">
         <h1>Terms and Conditions</h1>
       </div>
       <div className="terms_image">
         <img src={pending} alt="pending_page"/>
       </div>
       </>

  )
};

export default Terms;
