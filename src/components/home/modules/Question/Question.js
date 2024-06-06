import React from "react";
import "./Question.css";
import optionSymbolImageTwo from "../../../../assets/svg/option_symbol_two.svg";
import showSvg from "../../../../assets/svg/show_symbol.svg";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Question = () => {

    const [answerIndex,setAnswerIndex] = useState(0);

    const data =[
        {
            id:1,
            image1:optionSymbolImageTwo,
            text:"What is a Metaverse?",
            image2:showSvg,
            answer:" Benefit of the Metaverse in real estate lies in its ability to offer immersive experiences, enabling users to explore properties virtually, make informed decisions, and experience properties before purchase without geographical constraints. User can walk through the property virtually in Metaverse irrespective whether property is physically constructed or not."
        },
        {
            id:2,
            image1:optionSymbolImageTwo,
            text:"Why to choose Aautiverse?",
            image2:showSvg,
            answer:"N/A",
        },
        {
            id:3,
            image1:optionSymbolImageTwo,
            text:"How much time does it take to create a Metaverse real-estate project?",
            image2:showSvg,
            answer:"N/A "
        },
        {
            id:4,
            image1:optionSymbolImageTwo,
            text:"How much does it cost for each project?",
            image2:showSvg,
            answer:" N/A"
        },
        {
            id:5,
            image1:optionSymbolImageTwo,
            text:"How to use Metaverse Aautiverse application?",
            image2:showSvg,
            answer:" N/A"
        },
        {
            id:6,
            image1:optionSymbolImageTwo,
            text:"What is the use of VR in metaverse?",
            image2:showSvg,
            answer:" N/A"
        },

    ]

     const toggleIndex = (index)=>{
        setAnswerIndex(answerIndex === index ? answerIndex : index);
     }

  return (
    <div className="question_page">
      <div className="question_content">
        <h2 className="head_text">Frequently Asked Questions</h2>
        <p className="paragraph_text">
          Explore answers to commonly asked questions about AautiVerse.
        </p>

         {
            data.map((item,index)=>{
                return(
                    <div className="question_container" key={index}>
                    <div className="question_list" onClick={()=>toggleIndex(index)}>
                      <div className="question_text">
                        <img src={item.image1} alt="not found" />
                        <h3 className="question_text">{item.text}</h3>
                      </div>
                      {answerIndex === index ? <FaCaretDown style={{fontSize:'30px'}}/> 
                         :<img src={item.image2} alt="not found" />
                       }
                    </div>
                    {answerIndex === index && (
                     <p className="answer_text">
                      {item.answer}
                     </p>
                    )} 
                  </div>
                ) 
            })
         }
     </div>
    </div>
  );
};

export default Question;
