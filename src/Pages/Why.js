import React from 'react'
import Navbar from '../Components/Navbar'
import "../Styles/Why.css";



import choooseus from "../assets/choooseus.webp"
import logo1 from "../assets/logo1_1x.webp";
import logo2 from "../assets/logo2_1x.webp";
import logo3 from "../assets/logo3_1x.webp";
import logo4 from "../assets/logo4_1x.webp";
import logo5 from "../assets/logo5_1x.webp";
import logo6 from "../assets/logo6_1x.webp";






const Why = () => {
  return (
    <div>
        <div className="main">
            <Navbar/>
            <div className="home">
               
               
                <div className="whysec1">
            <div className="texts">
                {/* <h2>We create impactful</h2> */}
                <h1>Reasons Customers <br />
                    Globally Choose Us</h1>
                <p>Exceptional concepts, timely execution and hassle-free delivery are the main elements of Logo Eminent’s success</p>
            
            </div>
            <div className="whysec1-right">
                  <img src={choooseus} alt="" />
            </div>
                </div>
                

                <div className="whyslider">

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














            </div>
        </div>
    </div>
  )
}

export default Why                      