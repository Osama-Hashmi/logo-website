import React from 'react'
import "../Styles/Website.css";
import Navbar from "../Components/Navbar";



const Website = () => {
  return (
    <div>
    <div className="main">
    <Navbar />
    <div className="home">
        <div className="sec1">
            <div className="texts">
                <h3>Scalable & High-quality</h3>
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
        </div>

    </div>

    </div>
    </div>
  )
}

export default Website