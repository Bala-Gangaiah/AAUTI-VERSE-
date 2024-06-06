import React from "react";
import "./Footer.css";
import logo from "../../../../assets/svg/aauti_verse.svg";
import s_Idin from "../../../../assets/svg/socilaMedia/s_ldin.svg";
import s_fb from "../../../../assets/svg/socilaMedia/s_fb.svg";
import s_git from "../../../../assets/svg/socilaMedia/s_git.svg";
import s_hand from "../../../../assets/svg/socilaMedia/s_hand.svg";
import s_ball from "../../../../assets/svg/socilaMedia/s_ball.svg";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
       <div className="footer">

        <div className="footer_content">
          <div className="footer-left">
           <img src={logo} alt="the logo not found"/>
           <p className="footer_text">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
           </p>
           </div>
            <div className="footer-right">
            <h4 className="footer_header">Stay up to date</h4>
            <input type="email" placeholder="Enter your email" className="footer_input"/>
            <button className="footer_btn">Subscribe</button>
           </div>
           </div>

             <div  className="footer_lists">
                <span>
                  <Link to='/about'>About Us
                  </Link></span>
                <div className="dot"></div>
                <span>
                    <Link to='/services'>
                    Services
                    </Link>
                    </span>
                <div className="dot"></div>
                <span>
                    <Link to='/feature'>Features</Link></span>
                <div className="dot"></div>
                <span>
                    <Link to='/blog'>Blog</Link>
                </span>
                <div className="dot"></div>
                <span>
                    <Link to='/contact'>Contact Us</Link>
                </span>
                <div className="dot"></div>
                <span>
                    <Link to='/privacy'> Privacy Policy</Link>
                   </span>
                <div className="dot"></div>
                <span>
                    <Link to='/terms'>
                    Terms And Conditions
                   </Link></span>
             </div>
            
         
         
          <hr/>
          <div className="footer_bottom">
            <p className="footer_copyright">
               &copy; 2024 Aautiverse. All rights reserved.
            </p>
            <div className="footer_bottom_right">
              <div>
                <img src={s_Idin} alt="not found"/>
                </div>
                <div>
                <img src={s_fb} alt="not found"/>
                </div>
                <div>
                <img src={s_git} alt="not found"/>
                </div>
                <div>
                <img src={s_hand} alt="not found"/>
                </div>
                <div>
                <img src={s_ball} alt="not found"/>
                </div>
            </div>
          </div>
       </div>
  )
};

export default Footer;
