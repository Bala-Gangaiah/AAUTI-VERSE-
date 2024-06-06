import React, { useRef } from "react";
import "./Demo.css";
import Slider from "react-slick";
import left_symbol from "../../../../assets/svg//left_symbol.svg";
import right_symbol from "../../../../assets/svg/right_symbol.svg";

const Demo = () => {

  const sliderRef = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  
  };

  const data = [
    {
      id: 1,
      video:
        "https://v.ftcdn.net/07/22/93/91/700_F_722939147_oNrNJgTEi7nOVzXJAmlTW4qi0gaatV22_ST.mp4",
    },
    {
      id: 2,
      video:
        "https://v.ftcdn.net/06/32/44/27/700_F_632442788_VK7sCQkDY1EkbHxxOgmTThlmDip7qX2C_ST.mp4",
    },
  
    {
      id: 3,
      video:
        "https://v.ftcdn.net/07/12/50/06/700_F_712500613_eSiPkIhpmwjjilMERtjMnedQGp3IQmqr_ST.mp4",
    },
    {
      id: 4,
      video:
        "https://v.ftcdn.net/07/01/84/98/700_F_701849883_lY4U6hOZiDnXBm33zrYNvH47YiakvSfG_ST.mp4",
    },
    {
      id: 5,
      video:
      "https://v.ftcdn.net/06/80/53/61/700_F_680536124_vOhP3Dm5Y0bDdlvRiK86fZpQH15m0MbG_ST.mp4",
    },
    {
      id: 6,
      video:
        "https://v.ftcdn.net/05/70/86/41/700_F_570864171_lIiWEXaHiHskyhoX6OHk4PMiXd2NCPbC_ST.mp4",
    },
    {
      id: 7,
      video:
        "https://v.ftcdn.net/07/22/93/91/700_F_722939147_oNrNJgTEi7nOVzXJAmlTW4qi0gaatV22_ST.mp4",
    },
    {
      id: 8,
      video:
        "https://v.ftcdn.net/06/32/44/27/700_F_632442788_VK7sCQkDY1EkbHxxOgmTThlmDip7qX2C_ST.mp4",
    },
    {
      id: 9,
      video:
        "https://v.ftcdn.net/07/22/93/91/700_F_722939147_oNrNJgTEi7nOVzXJAmlTW4qi0gaatV22_ST.mp4",
    },
  ];

  const handleNext = () => {
    sliderRef.current.slickNext();  
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };


  return (
    <div className="demo_container">
      <div className="demo_text">
        <p className="vertical_text">Instagram</p>
        <p className="vertical_text">Twitter</p>
        <p className="vertical_text">Facebook</p>
      </div>
      <div className="demo_content_item">
        <h1 className="demo_title">Watch Demo</h1>
        <div>
        <Slider {...settings} ref={sliderRef}>
          {data.map((item, index) => {
            return (
           
              <div key={index}>
                
                  <video  width="100%" controls>
                    <source src={item.video} type="video/mp4"></source>
                  </video>
                 
              </div>
          
            );
          })}
          </Slider>
         </div>
         <div className="demo_btn_container">
            <div className="demo_item_arrange">
                <div className="demo_slide_item" onClick={handlePrev}>
                    <img src={left_symbol} alt="not found" />
                </div>
                <div className="demo_slide_item">
                <img src={right_symbol} alt="not found" onClick={handleNext} />
                </div>
            </div>
         </div>
        </div>
      </div>
  );
};

export default Demo;
