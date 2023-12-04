import React from 'react'
import "../Styles/Branding.css";
import Navbar from "../Components/Navbar";
import { Row, Col } from "antd";



import brandinghero from "../assets/branding-hero.webp"
import logo1 from "../assets/logo1_1x.webp";
import logo2 from "../assets/logo2_1x.webp";
import logo3 from "../assets/logo3_1x.webp";
import logo4 from "../assets/logo4_1x.webp";
import logo5 from "../assets/logo5_1x.webp";
import logo6 from "../assets/logo6_1x.webp";




const Branding = () => {
  return (
    <div>
        <div className="main">
        <Navbar />
            <div className="home">
                
                <div className="bsec1">
            <div className="texts">
                <h2>We create impactful</h2>
                <h1>Brands that Last a Lifetime</h1>
                <p>Make a good impression on your customer with flawless brand designs.</p>
                
                <div className="btn">
                  <div className="btn1">
                    <button>Start Your Project With Us</button>
                  </div>
                  {/* <div className="btn2">
                    <button>Live Chat</button>
                  </div> */}
                </div>
            
            </div>
            <div className="bsec1-right">
                  <img src={brandinghero} alt="" />
            </div>
                </div>
            
                <div className="bslider">

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
                </div>

                <div className="bsec3">
                    
                </div>
            
            
            
            
            
            
            
            
            
            </div>
        </div>
    </div>
  )
}

export default Branding