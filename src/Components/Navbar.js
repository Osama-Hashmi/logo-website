import React from "react";
// import Logo from '../assets/logo06-free-img.png'
// import {BsCartFill} from 'react-icons/bs'
import "../Styles/navbar.css";
import Call from "../assets/icon_call.svg";
import Chat from "../assets/icon_chat.svg";
import logo from "../assets/logo.svg"
import vid from "../assets/logo.mp4"
// import Star from "../assets/cute-star-dry-clay-yellow-graphic-kids.jpg"
import Stars from "../assets/stars_1x.webp"
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="nav">
      <div className="Navbar">
        {/* <div className="logo">
      <img src={Logo} alt="Logo" />
    </div> */}

        <div className="list">
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Reviews(<img src={Stars} alt="Star" /> 4.9 Stars)</a>
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
            <Link to={"/"}>Logo Design</Link>
            <Link to={"/Website"}>Website</Link>
            <Link to={"/"}>Branding</Link>
            <Link to={"/"} >How It Works</Link>
            <Link to={"/"}>Why Choose Us</Link>
            <Link to={"/"}>Packages</Link>
            <Link to={"/"}>Portfolio</Link>
          </div>

          <div className="startedButton">
            <button>Get Started Now</button>
          </div>


      </div>
    
    
    
    
    
    </div>
  );
};

export default Navbar;
