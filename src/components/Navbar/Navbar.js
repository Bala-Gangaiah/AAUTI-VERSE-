import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/svg/aauti_verse.svg";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);


  const toggleNav = () => {
    setShowNav(!showNav);
  }


  return (
       <nav className="navbar">
        <IoMenu className="menu-icon" onClick={toggleNav } />
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <div className={`sidebar ${showNav ? "show" : ""}`}>
        <img src={logo} alt="Logo" className="sidebar-logo-small-screen" onClick={toggleNav}/>
        <div className="horizontal_line"></div>
          <div className="nav-right">
            <ul>
              <NavLink to="/" className="navlink" onClick={toggleNav}>
                <li>Home</li>
              </NavLink>
              <NavLink to="/about" className="navlink" onClick={toggleNav}>
                <li>About us</li>
              </NavLink>
              <NavLink to="/services" className="navlink" onClick={toggleNav}>
                <li>Services</li>
              </NavLink>
              <NavLink to="/feature" className="navlink" onClick={toggleNav}>
                <li>Features</li>
              </NavLink>
              <NavLink to="/blog" className="navlink" onClick={toggleNav}>
                <li>Blog</li>
              </NavLink>
              <NavLink to="/contact" className="navlink" onClick={toggleNav}>
                <li>Contact</li>
              </NavLink>
            </ul>
        </div>
        </div>
      </nav>
  );
};

export default Navbar;
