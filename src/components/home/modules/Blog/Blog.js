import React from "react";
import "./Blog.css";
import { FaArrowRight } from "react-icons/fa6";
import blog1 from "../../../../assets/images/blog1.png";
import blog2 from "../../../../assets/images/blog2.png";
import blog3 from "../../../../assets/images/blog3.png";
import blog4 from "../../../../assets/images/blog4.png";

const Blog = () => {

   const data = [
        {
            id:1,
            image:blog1,
            heading:" Differences between metaverse and web3",
            paragraph:" Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tarikostu moka.",
            symbol: <span className="arrange_blog">Read more<FaArrowRight/></span>
        },
        {
            id:2,
            image:blog2,
            heading:" What is Aautiverse?",
            paragraph:"Lorem ipsum dolor sit amet consectetur adipi",
            symbol: <span className="arrange_blog">Read more<FaArrowRight/></span>
        },
        {
            id:3,
            image:blog3,
            heading:"How Aautiverse Helps?",
            paragraph:" Lorem ipsum dolor sit amet consectetur adipi",
            symbol: <span className="arrange_blog">Read more<FaArrowRight/></span>
        },
        {
            id:4,
            image:blog4,
            heading:"The Power of Digital Twins in the Enterprise Metaverse",
            paragraph:"Discover how digital twins in the enterprise metaverse change the game in the business. Learn how digital twins make things more efficient Industrial AI and industrial Metaverse",
            symbol: <span className="arrange_blog">Read more<FaArrowRight/></span>
        },
   ]
 
       return (
       <div className="blog_container">
          <div className="content_blog">
            <h1 className="blog_header">
              Our Most Recent Blog Posts
            </h1>
            <p className="text_para">
               Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>

            <div className="blog_images ">
            {
                data.map((item,index)=>{

                  const isFourthItem = index === 3;

                  const text_class = isFourthItem ? "flex_change" : "";

                    return(
                        <div className={`blog_img_container ${text_class}  `}
                        style={{flexGrow:1}}  key={index}>
                        <img src={item.image} alt="not found" className="blog_item_image"/>
                        <div>
                           <h1 className="header_text">
                             {item.heading}
                           </h1>
                           <div>
                           <p className="para_blog ">
                             {item.paragraph}
                           </p>
                           <div>
                            {item.symbol}
                            </div>
                            </div>
                        </div>
                    </div>
                 )})}
                 <div className="explore_blog">
                    <div>
                       <h4>Explore</h4>
                       <span>More Blogs<FaArrowRight/></span>
                    </div>
                 </div>
        </div>
       </div>
  )
};

export default Blog;
