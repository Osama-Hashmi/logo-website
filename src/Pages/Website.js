import React from 'react'
import "../Styles/Website.css";
import Navbar from "../Components/Navbar";
import { Row, Col } from "antd";


import webhero from "../assets/web-hero_1x.webp"
import logo1 from "../assets/logo1_1x.webp";
import logo2 from "../assets/logo2_1x.webp";
import logo3 from "../assets/logo3_1x.webp";
import logo4 from "../assets/logo4_1x.webp";
import logo5 from "../assets/logo5_1x.webp";
import logo6 from "../assets/logo6_1x.webp";
import modern1 from "../assets/web_modern1_1x.webp"
import modern2 from "../assets/modern2.webp"
import modern3 from "../assets/modern3.webp"
import modern4 from "../assets/modern4.webp"





import ExpertCard from '../Components/Cards/ExpertCard';
import WeDesignCard from '../Components/Cards/WeDesignCards';





const Website = () => {

    const ExpertCardData = [
        {
            ExpertImg: logo1,
            Heading: "Competitor Research",
            Text: "We analyse your competitors, assess your goods and services, and create a branding strategy.",
        },
    ]

    const WeDesignCardData = [
        {
          WeImage: modern1,
          Heading: "Static Website",
          Text: "You may get the best static websites form us, that would enhance your digital presence and make you standout from your competitors. Our designs and development will surely bring in conversions and sales.",
        },
        {
            WeImage: modern2,
            Heading: "Ecommerce Website",
            Text: "B2C, B2B and marketplace ecommerce sites is our specialty. We can create an entirely new site for you or integrate an ecommerce component in your already existing site.",
          },
          {
            WeImage: modern3,
            Heading: "CMS Website",
            Text: "With our efficient and expertly created CMS websites, you may have total control over your website. Your website can be edited, added to, or modified as needed whenever and however you like.",
          },
          {
            WeImage: modern4,
            Heading: "B2B & B2C Website",
            Text: "Our B2B and B2C portals are SEO optimized and come with an easy to use content management system, enabling you to reach more customers with ease.",
          },
    ]


  return (
    <div>
    <div className="main">
    <Navbar />
    <div className="home">
        <div className="sec1">
            <div className="texts">
                <h2>Scalable & High-quality</h2>
                <h1>Custom Websites for Your Growing Business</h1>
                <p>Get ready to experience client-focused and engaging website solutions, guaranteed to bring in tangible business results.</p>
                
                <div className="btn">
                  <div className="btn1">
                    <button>Start Your Project With Us</button>
                  </div>
                  {/* <div className="btn2">
                    <button>Live Chat</button>
                  </div> */}
                </div>
            
            </div>
            <div className="sec1-right">
                  <img src={webhero} alt="" />
            </div>
        </div>

        <div className="slider">
          <marquee behavior="scroll" direction="left">
            <div className="mar">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
              <img src={logo6} alt="" />
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
              <img src={logo6} alt="" />
            </div>
          </marquee>
        </div>

    

        <div className="sec3">
            <div className="sec3-text">
                <h1>Let Industry Experts in Design and <br />
                    Development Boost Your Online Visibility.</h1>
                <p>You get the following in every package:</p>
            </div>
            <div className="sec-3-expertcards">
              {ExpertCardData?.map((data, index) => {
                  return (
                      <Col key={index} xs={24} md={12} xl={6}>
                            <ExpertCard data={data}/>
                        </Col>
                      );
                    })}

            </div>
        </div>


        <div className="sec4">
            <div className="sec-4-text">
                <h1>Type Of Websites We Design</h1>
                <p>Take Advantage Of Our Logo Designing Services Mentioned Below.</p>
            </div>
        <div className="wedesigncards">
            <Row gutter={[30, 30]}>
              {WeDesignCardData?.map((data, index) => {
                return (
                  <Col key={index} xs={24} md={12} xl={6}>
                    <WeDesignCard video={index === 3} data={data} />
                  </Col>
                );
              })}
            </Row>
            </div>
        </div>


    </div>
    </div>
    </div>
  )
}

export default Website