import React from "react";
// import Logo from '../assets/logo06-free-img.png'
// import {BsCartFill} from 'react-icons/bs'
import "../Styles/navbar.css";
import Call from "../assets/icon_call.svg";
import Chat from "../assets/icon_chat.svg";
import logo from "../assets/logo.svg"
import vid from "../assets/logo.mp4"



const Navbar = () => {
  return (
    <div className="nav">
      <div className="Navbar">
        {/* <div className="logo">
      <img src={Logo} alt="Logo" />
    </div> */}

        <div className="list">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Reviews</li>
            {/* <li>Table</li>  */}
          </ul>
        </div>
        <div className="links">
          <div className="chat">
            <img src={Chat} alt="Chat icon" />
            <p>Live Chat</p>
          </div>

          <div className="cont">
            <img src={Call} alt="Call icon" />
            <p>+1 (844)213-5457 </p>
          </div>

          {/* <button>
            <p>Amount</p>
            <p><BsCartFill size={25} color={'#78919b'}/></p>
          </button> */}
        </div>
      </div>

      <div className="bar">
      <div className="eminent">
        <video src={vid}></video>
        <img src={logo} alt="Logo" />
        {/* <h1>Logo <b>Eminent</b></h1> */}
      </div>

          <div className="tags">
            <a href="">Logo Design</a>
            <a href="">Website</a>
            <a href="">Branding</a>
            <a href="">How It Works</a>
            <a href="">Why Choose Us</a>
            <a href="">Packages</a>
            <a href="">Portfolio</a>
          </div>

          <div className="startedButton">
            <button>Get Started Now</button>
          </div>


      </div>
    
    
    
    
    
    </div>
  );
};

export default Navbar;
