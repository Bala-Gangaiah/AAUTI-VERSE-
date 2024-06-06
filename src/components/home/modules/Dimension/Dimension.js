import React from "react";
import "./Dimension.css";
import playStoreSvg from "../../../../assets/svg/playstore.svg";
import appleStoreSvg from "../../../../assets/svg/applestore.svg";
import iphone_img from "../../../../assets/images/iphone_h.png";

const Dimension = () => {
  const data = [
    {
      id: 1,
      heading: 30,
      symbol: "K",
      text: "User Worldwide",
    },
    {
      id: 2,
      heading: 50,
      symbol: "K",
      text: "Satisfied Clients",
    },
    {
      id: 3,
      heading: 99,
      symbol: "%",
      text: "Positive Reviews",
    },
  ];
  return (
    <div className="dimension_page">
      <div className="dimension_wrap">
        <div className="dimension_content">
          <h2 className="text_container">A New Dimension of Reality:</h2>
          <h2 className="text_gradient">Experience the Difference</h2>
          <p className="text_paragraph">
            Aautiverse: Where we make the impossible possible. Join us in
            crafting a better world where dreams become reality. Welcome to
            Aautiverse.
          </p>
        </div>

        <div className="dimension_differ">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="heading">
                  {item.heading}
                  <span className="dimension_view">{item.symbol}</span>
                </h3>
                <p className="dim_text">{item.text}</p>
              </div>
            );
          })} 
        </div>

        <div className="app_store">
          <div className="dimension_apps">
            <img src={playStoreSvg} alt="not found" className="playstore_img" />
          </div>
          <div className="dimension_apps">
            <img src={appleStoreSvg} alt="not found" className="appstore_img" />
          </div>
          <div>
            <a className="link_container" href="#">
              Visit WebSite
            </a>
          </div>
        </div>
      </div>
      <div className="iphone_dim">
        <img src={iphone_img} alt="not found" />
      </div> 
    </div>
  );
};

export default Dimension;
 