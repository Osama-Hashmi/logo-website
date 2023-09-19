import React from 'react'
import Nabvar from '../Components/Navbar'
import "../Styles/Home.css"
import alo from "../assets/alo.webp"
import c1 from "../assets/c1_1x.webp"
import work from "../assets/work5_1x.webp"
import work8 from "../assets/work8_1x.webp"
import work2 from "../assets/work2_1x.webp"
import work6 from "../assets/work6_1x.webp"
import work9 from "../assets/work9_1x.webp"
import work3 from "../assets/work3_1x.webp"
import work7 from "../assets/work7_1x.webp"
import work10 from "../assets/work10_1x.webp"
import work4 from "../assets/work4_1x.webp"
import work11 from "../assets/work11_1x.webp"
import logo1 from "../assets/logo1_1x.webp"
import logo2 from "../assets/logo2_1x.webp"
import logo3 from "../assets/logo3_1x.webp"
import logo4 from "../assets/logo4_1x.webp"
import logo5 from "../assets/logo5_1x.webp"
import logo6 from "../assets/logo6_1x.webp"





const Home = () => {
  return (
      <div className="main">
      <Nabvar/>
      <div className="home">
          <div className="head">

          <div className="text">
              <h1>A Logo Design Agency Trusted by Startups & Billion Dollar Companies</h1>
              <p>We are a global agency, creating brands that stay in the hearts and minds of consumers forever.</p>
              <div className="btn">
              <div className="btn1">
              <button>Start Your Project With Us</button>
              </div>
              <div className="btn2">
              <button>Live Chat</button>
              </div>
              </div>
          </div>
          
          <div className="logos">
            <div className="cols">

          <div className="col1">
            <div className="crd1">
              <img src={alo} alt="img" />
              <p><img src={c1} alt="" /> Anna shvets</p>
            </div>
            <div className="crd1">
              <img src={work} alt="img" />
              <p><img src={c1} alt="" /> Jonathan Meza</p>
            </div>
            <div className="crd1">
              <img src={work8} alt="img" />
              <p><img src={c1} alt="" />Gustavo Fring</p>
            </div>
          </div>

          <div className="col2">
          <div className="crd1">
              <img src={work2} alt="img" />
              <p><img src={c1} alt="" /> Rene Asmussen</p>
            </div>
            <div className="crd1">
              <img src={work6} alt="img" />
              <p><img src={c1} alt="" /> Beatriz Braga</p>
            </div>
            <div className="crd1">
              <img src={work9} alt="img" />
              <p><img src={c1} alt="" />Daniel Tran</p>
            </div>
            
          </div>

          <div className="col3">
          <div className="crd1">
              <img src={work3} alt="img" />
              <p><img src={c1} alt="img" />Spencer Selover</p>
            </div>
            <div className="crd1">
              <img src={work7} alt="img" />
              <p><img src={c1} alt="" />Giang Trương</p>
            </div>
            <div className="crd1">
              <img src={work10} alt="img" />
              <p><img src={c1} alt="" />Leticia Ribeiro</p>
            </div>
            
          </div>


          <div className="col4">
          <div className="crd1">
              <img src={work4} alt="img" />
              <p><img src={c1} alt="" />Eduardo Rosas</p>
            </div>
            <div className="crd1">
              <img src={work11} alt="img" />
              <p><img src={c1} alt="" />Ksenia Chernaya</p>
            </div>
            {/* <div className="crd1">
              <img src={alo} alt="img" />
              <p><img src={c1} alt="" /> Anna shvets</p>
            </div> */}
            
            
            </div>
          
          
          </div>

          </div>
      
          </div>

          <div className="slider">
            <marquee behavior="scroll" direction="left">
              <div className="mar" >
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
  )
}

export default Home
