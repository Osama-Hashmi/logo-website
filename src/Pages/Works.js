import React from 'react'
import "../Styles/Works.css";
import Navbar from "../Components/Navbar";


import VideoPoster from "../assets/video-poster_1x.webp";
import logo1 from "../assets/logo1_1x.webp";
import logo2 from "../assets/logo2_1x.webp";
import logo3 from "../assets/logo3_1x.webp";
import logo4 from "../assets/logo4_1x.webp";
import logo5 from "../assets/logo5_1x.webp";
import logo6 from "../assets/logo6_1x.webp";






const Works = () => {
  return (
    <div>
        <div className="main">
            <Navbar/>
            <div className="home">

                <div className="worksec1">
            <div className="texts">
                {/* <h2>We create impactful</h2> */}
                <h1>How Does It Work?</h1>
                <p>A simple and effective process ensuring deliveries on quality and on time!</p>
            
            </div>
            <div className="worksec1-right">
                  <img src={VideoPoster} alt="" />
            </div>
                </div>


                <div className="workslider">

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

export default Works
    