import React from "react";
import "./About.css";
import optionSymbolImage from "../../../../assets/svg/option_symbol.svg";

const About = () => {
  const temp = [
    {
      id: 1,
      image: optionSymbolImage,
      passage:
         <p className="para"><span style={{fontWeight:"bold"}}>Cutting-edge Technology:</span> Utilizing advanced technology, we create realistic environments for your future real-estate projects with metaverse where users can engage and interact seamlessly.</p>
    },
    {
      id: 2,
      image: optionSymbolImage,
      passage:
        <p className="para">  <span style={{fontWeight:"bold"}}>Personalized Avatars:</span> User can explore properties with their realistic avatars, by enhancing the sense of presence in dream properties.</p>
    },
    {
      id: 3,
      image: optionSymbolImage,
      passage:
         <p className="para"> <span style={{fontWeight:"bold"}}>MetaRob Assistance:</span> Meet MetaRob(Metaverse AI Robot), providing guided tours and assistance throughout user journey in AautiVerse real-estate projects.</p>
    },
    {
      id: 4,
      image: optionSymbolImage,
      passage:
         <p className="para"> <span style={{fontWeight:"bold"}}>Easy Navigation:</span>  Seamlessly navigate our metaverse properties with touch screen feature, offering 360-degree views in 4K quality.</p>
    },
    {
      id: 5,
      image: optionSymbolImage,
      passage:
         <p className="para"><span style={{fontWeight:"bold"}}> VR experience:</span> Immerse yourself in our properties with VR headset,simulating real-world living experiences.</p>
    },

  ]
 
  return (
    <div className="wrapper">
      <div className="about_container">
        <h1 className="heading_content">About Us</h1>
        <p className="para_content">
          AautiVerse, where innovation meets virtual reality. We pride ourselves
          on pioneering the future of real estate within the metaverse. With a
          focus on creating immersive experiences, we offer
        </p>
        <h2>Metaverse Real-Estate Virtual Tours</h2>

         {
          temp.map((item,index)=>{
              return(
                <div className="about_content" key={index}>
                <img src={item.image} alt="not found" />
               
                      {item.passage}
                
              </div>
              )
          })
         }
      </div>
    </div>
  );
};

export default About;
