import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/aboutUs/About";
import Services from "./components/services/Services";
import Feature from "./components/features/Feature";
import Blog from "./components/blog/Blog";
import Contact from "./components/contacts/Contact";
import Terms from "./components/home/modules/Terms and conditions/Terms";
import Privacy from "./components/home/modules/Privacy Policy/Privacy";

const App = () => {
  return (
        <div>
           <Navbar/>
           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/services" element={<Services/>}/>
               <Route path="/feature" element={<Feature/>}/>
               <Route path="/blog" element={<Blog/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path='/terms' element={<Terms/>}/>
               <Route path='/privacy' element={<Privacy/>}/>
           </Routes>
        </div>
  )
};

export default App;
