import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const data = [
    {
      id: 1,
      heading: (
        <h4 className="contact_view">
          <span className="icon">
            <FaLocationDot />
          </span>
          Hyderabad, India
        </h4>
      ),
      text: "Location",
    },
    {
      id: 2,
      heading: (
        <h4 className="contact_view">
          <span className="icon">
            <MdOutlineEmail />
          </span>
          info@aautiverse.com
        </h4>
      ),
      text: "Email",
    },
    {
      id: 3,
      heading: (
        <h4 className="contact_view">
          <span className="icon">
            <FaPhone />
          </span>
          +91-8555455327
        </h4>
      ),
      text: "Phone Number",
    },
    {
      id: 4,
      heading: (
        <h4 className="contact_view">
          <span className="icon">
            {" "}
            <FaBusinessTime />
          </span>
          Mon-Fri: 9AM - 6PM
        </h4>
      ),
      text: "Respond Time",
    },
  ];
  return (
    <div className="contact_container">
      <div className="contact_details">
        <div className="contact_demo">
          <h1 className="contact_heading">Contact Us</h1>
          <p className="para_contact">
            Lorem Ipsum is simply more often used dummy text of the printing and
            typesetting industry of the century.
          </p>
          <div className="contact_info">
            {data.map((item, index) => {
              return (
                <div className="contact_content" key={index}>
                  <h2>{item.heading}</h2>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className="icons_contact">
            <h2>Follow us on</h2>
            <div style={{display:"flex" , gap:10}}>
              <div className="sm-item">
                <FaFacebook />
              </div>
              <div  className="sm-item">
                <FaTwitter />
              </div>
              <div  className="sm-item">
                <FaInstagram />
              </div>
              <div  className="sm-item">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>

        <div className="contact_login">
          <div className="input_contact">
            <input
              type="text"
              placeholder="Your Name"
              className="contact_gap"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="contact_email"
            />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <input type="text" placeholder="Your Message" />
          </div>
          <div className="container">
            <button type="button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
