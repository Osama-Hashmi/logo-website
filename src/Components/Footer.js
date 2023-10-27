import React from "react";
import "../Styles/Footer.css";
import logoeminenet_logo_1x from "../assets/logoeminenet-logo_1x.webp";
import authorized_1x from "../assets/authorized_1x.webp"
import payment_1x from "../assets/payment_1x.webp"
import { FacebookFilled, InstagramOutlined, LinkedinFilled, StarFilled, TwitterSquareFilled } from "@ant-design/icons";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="address">
          <img src={logoeminenet_logo_1x} alt="Logo Eminent Logo" />
          <p>
            Toll Free:<a href="#">+1 (844) 213-5457</a>
          </p>
          <p>
            Email: <a href="#">info@logoeminent.com</a>
          </p>
          <p>
            Address: Miracle Mile Plaza 601 21st Street Suite 300, Vero Beach,
            FL, 32960, USA
          </p>
          <img src={authorized_1x} alt="" />
        </div>
        
        <div className="linkslist">
        <div className="resources">
            <h2>Resources</h2>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Review</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Refunds and Dispute</a></li>
        </div>
        
        <div className="logoDesign">
            <h2>Logo Designs</h2>
            <li><a href="#">Logo Portfolio</a></li>
            <li><a href="#">Logo Packages</a></li>
            <li><a href="#">Logo Review</a></li>
            <li><a href="#">Logo FAQs</a></li>
        </div>

        <div className="websiteDesign">
            <h2>Website Design</h2>
            <li><a href="#">Website Portfolio</a></li>
            <li><a href="#">Website Portfolio</a></li>
            <li><a href="#">Website Portfolio</a></li>
            <li><a href="#">Website Portfolio</a></li>
        </div>

        <div className="quickLinks">
            <h2>Quick Links</h2>
            <li><a href="#">Branding Design</a></li>
            <li><a href="#">Stationary Design</a></li>
            <li><a href="#">Video Animation</a></li>
            <li><FacebookFilled /><TwitterSquareFilled /><LinkedinFilled /><InstagramOutlined /></li>
            <a href="#">See our <b>85</b> reviews on</a>
            <li><StarFilled /> Trustpilot</li>
        </div>


        </div>

      </div>
        <div className="bottomLine">
            <div className="text">
                <p>Copyright © Today is 2023 LogoEminent | All rights reserved. Terms And Conditions | Privacy Policy</p>
            </div>
            <div className="payments">
                <img src={payment_1x} alt="" />
            </div>
        </div>

    </div>
  );
};

export default Footer;
