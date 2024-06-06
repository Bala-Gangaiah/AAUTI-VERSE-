import React from "react";
import "./Home.css";
import background_image from "../../assets/images/metaverse_virtual_love_collage1.png";
import Welcome from "./modules/welcome/Welcome";
import Portfolio from "./modules/Portfolio/Portfolio";
import About from "./modules/About US/About";
import Question from "./modules/Question/Question";
import Dimension from "./modules/Dimension/Dimension";
import Blog from "./modules/Blog/Blog";
import Contact from "./modules/Contact/Contact";
import Footer from "./modules/Footer/Footer";
import Demo from "./modules/Watch Demo/Demo";



const Home = () => {

  return (
    <>
      <div className="home_page">
        <img src={background_image} alt="not found" />
        <Welcome/>
        <Demo/>
        <Portfolio/>
        <About/>
        <Question/>
        <Dimension/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
