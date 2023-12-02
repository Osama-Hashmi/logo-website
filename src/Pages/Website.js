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
import wi1 from "../assets/wi1.webp"
import wi2 from "../assets/wi2.webp"
import wi3 from "../assets/wi3.webp"
import wi4 from "../assets/wi4.webp"
import wi5 from "../assets/wi5.webp"
import wi6 from "../assets/wi6.webp"
import wi7 from "../assets/wi7.webp"
import wi8 from "../assets/wi8.webp"
import Bundle from "../assets/logo-side_1x.webp";
import Design from "../assets/package-side_1x.webp";
import One from "../assets/One.webp";
import Two from "../assets/Two.webp";
import Three from "../assets/Three.webp";
import Four from "../assets/Four.webp";
import Five from "../assets/Five.webp";
import Six from "../assets/Six.webp";
import Seven from "../assets/Seven.webp";
import Eight from "../assets/Eight.webp";
import Nine from "../assets/Nine.webp";
import Custom from "../assets/custom-side_1x.webp";
import Icon1 from "../assets/icon_designer_1x.webp";
import Icon2 from "../assets/icons_247_1x.webp";
import Icon3 from "../assets/icons_100_1x.webp";
import Icon4 from "../assets/icon_guarantee_1x.webp";







import ExpertCard from '../Components/Cards/ExpertCard';
import WeDesignCard from '../Components/Cards/WeDesignCards';
import WebsitePackages from "../Components/Cards/WebsitePackages";






const Website = () => {

    const ExpertCardData = [
        {
            ExpertImg: wi1,
            Heading: "Competitor Research",
            Text: "We analyse your competitors, assess your goods and services, and create a branding strategy.",
        },
        {
            ExpertImg: wi2,
            Heading: "Website Sitemap Finalization",
            Text: "Our professionals decide on the ideal website architecture to attract reliable customers to your website.",
        },
        {
            ExpertImg: wi3,
            Heading: "Pages With Custom Designs",
            Text: "Each page has a unique design, limitless modifications, and stock images.",
        },
        {
            ExpertImg: wi4,
            Heading: "Website Content Creation",
            Text: "Unique content is written and SEO-optimized to improve online performance and search rankings.",
        },
        {
            ExpertImg: wi5,
            Heading: "Website Development",
            Text: "Website is developed to adjust different screen sizes and support all devices",
        },
        {
            ExpertImg: wi6,
            Heading: "Content Management System",
            Text: "Access to wordpress cms is given which you will be able to update your content in seconds",
        },
        {
            ExpertImg: wi7,
            Heading: "Technical Training of Your Site",
            Text: "Complete training is given to you to manage your website content and add more pages, etc",
        },
        {
            ExpertImg: wi8,
            Heading: "Other Items",
            Text: "Once site is launched, we can also handle your site hosting, social media, emails and so on.",
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


    const AffordablePackageslist = [
        {
        //   TitleImage: Icon3,
          Heading: "Beginner",
          Subheading: "Ideal solution for beginners",
          Pricing: "$199",
          Discount: ["$995", "80% Off!"],
          ListHeading: "PACKAGE INCLUDES:",
          ListItems: [
            "1 Page Website Design",
            "Unlimited Revision",
            "3 Stock Photos",
            "1 Banner Design",
            "Contact/Query Form",
            "Complete W3C Certified HTML",
            "Complete Deployment",
            "Value Added Services*",
            "Dedicated Project Manager",
            "100% Ownership Rights",
            "100% Satisfaction Guarantee",
            "100% Money Back Guarantee",
            "Mobile Responsive $150",
            "Content Management System $150",
          ],
        //   DeliverableImage: Icon1,
          LogoStylesHeading: "",
        //   LogoStyleImage: Icon2,
          LogoStyleListItem: [""],
          PackageHeading: "",
          PackageListItems: [""],
        },
        {
            //   TitleImage: Icon3,
              Heading: "Budget",
              Subheading: "Ideal solution for beginners",
              Pricing: "$299",
              Discount: ["$1495", "80% Off!"],
              ListHeading: "PACKAGE INCLUDES:",
              ListItems: [
                "4 Logo Design Concepts",
                "5 Revision Cycle",
                "1 Dedicated Designer",
                "24/7 Chat Support",
                "Free Color Options",
                "Free Fav Icon",
                "Print Friendly Design",
              ],
              DeliverableImage: Icon1,
              LogoStylesHeading: "Logo Styles Included:",
              LogoStyleImage: Icon2,
              LogoStyleListItem: ["Wordmark/Logotype", "Signature/Script"],
              PackageHeading: "WHEN TO CHOOSE THIS PACKAGE:",
              PackageListItems: ["100% Ownership Rights", "100% Money Back Guarantee"],
            },
            {
                //   TitleImage: Icon3,
                  Heading: "Best Seller",
                  Subheading: "Ideal solution for beginners",
                  Pricing: "$449",
                  Discount: ["$2245", "80% Off!"],
                  ListHeading: "PACKAGE INCLUDES:",
                  ListItems: [
                    "4 Logo Design Concepts",
                    "5 Revision Cycle",
                    "1 Dedicated Designer",
                    "24/7 Chat Support",
                    "Free Color Options",
                    "Free Fav Icon",
                    "Print Friendly Design",
                  ],
                  DeliverableImage: Icon1,
                  LogoStylesHeading: "Logo Styles Included:",
                  LogoStyleImage: Icon2,
                  LogoStyleListItem: ["Wordmark/Logotype", "Signature/Script"],
                  PackageHeading: "WHEN TO CHOOSE THIS PACKAGE:",
                  PackageListItems: ["100% Ownership Rights", "100% Money Back Guarantee"],
                }
    ]



  return (
    <div>
    <div className="main">
    <Navbar />
    <div className="home">
        <div className="wsec1">
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
            <div className="wsec1-right">
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

    
        <div className="wsec3">
            <div className="wsec3-text">
                <h1>Let Industry Experts in Design and <br />
                    Development Boost Your Online Visibility.</h1>
                <p>You get the following in every package:</p>
            </div>
            <div className="sec-3-expertcards">
            <Row gutter={[30, 30]}>
              {ExpertCardData?.map((data, index) => {
                  return (
                      <Col key={index} xs={24} md={12} xl={6}>
                            <ExpertCard data={data}/>
                        </Col>
                      );
                    })}
                </Row>

            </div>
        </div>


        <div className="wsec4">
            <div className="wsec-4-text">
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


        <div className="wsec5">
        <div className="container">
            <div className="bundlepackage">
              <div className="bundlepackagetxt">
                <h3>Need More Than a Website Design?</h3>
                <p>
                Bundle your website design with our all-inclusive package & save hundreds
                View Packages
                </p>

                <div className="btn1">
                  <button>View Packages</button>
                </div>
              </div>

              <div className="bundlepackageimage">
                <img src={Bundle} alt="" />
              </div>
            </div>

            <div className="designpackage">
              <div className="designpackagetxt">
                <h3>Looking for Custom Website Design Packages?</h3>
                <p>Speak to our design consultant today - absolutely free!</p>
                <div className="btn2">
                  <button>Live Chat with Our Consultant</button>
                </div>
                <p>or call us at +1 (844) 213-5457</p>
              </div>
              <div className="designpackageimage">
                <img src={Design} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className="wsec6">
              <div className="wsec-6-text">
                  <h1>Have a Look at Our Award-Winning Websites</h1>
                  <p>Small-scale to million-dollar businesses, we have made impressive sites for everyone!</p>
              </div>

              <div className="wsec-6-imgs">
                  <div className="wsec-6-img">
                        <img src={One} alt="" />
                  </div>
                  <div className="wsec-6-img">
                        <img src={Two} alt="" />
                  </div>
                  <div className="wsec-6-img">
                        <img src={Three} alt="" />
                  </div>
                </div>
                <div className="wsec-6-imgs">
                  <div className="wsec-6-img">
                        <img src={Four} alt="" />
                  </div>
                  <div className="wsec-6-img">
                        <img src={Five} alt="" />
                  </div>
                  <div className="wsec-6-img">
                        <img src={Six} alt="" />
                  </div>
                </div>
                <div className="wsec-6-imgs">
                  <div className="wsec-6-img">
                        <img src={Seven} alt="" />
                  </div>
                  <div className="wsec-6-img">
                        <img src={Eight} alt="" />
                  </div>
                  <div className="wsec-6-img">
                        <img src={Nine} alt="" />
                  </div>
                </div>

                {/* <img src={Two} alt="" />
                <img src={Three} alt="" />
                <img src={Four} alt="" />
                <img src={Five} alt="" />
                <img src={Six} alt="" />
                <img src={Seven} alt="" />
                <img src={Eight} alt="" />
                <img src={Nine} alt="" /> */}
              {/* </div> */}
        </div>


        <div className="wsec-7">
        <div className="reasons">
            <div className="reasons-img">
              <img src={Custom} alt="" />
            </div>

            <div className="reasons-txt">
              <div className="reasons-txt-head">
                <h2>Reasons to Choose Logo Eminent</h2>
                <p>
                  We offer exceptional logo design services at incredibly
                  pocket-friendly cost. Some of the reasons we are the first
                  choice of many small businesses include:
                </p>
              </div>

              <div className="reasons-row">
                <div className="reasons-row1">
                  <div className="reasons-row-img">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="reasons-row-txt">
                    <h4>Winners of Awards in Design</h4>
                    <p>
                      Numerous awards have been given to our logo designers for
                      their branding and design work.
                    </p>
                  </div>
                </div>

                <div className="reasons-row1">
                  <div className="reasons-row-img">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="reasons-row-txt">
                    <h4>Free 24/7 Consultancy</h4>
                    <p>
                      We are available to help you 24/7. For any questions or
                      concerns, contact us.
                    </p>
                  </div>
                </div>
              </div>

              <div className="reasons-row">
                <div className="reasons-row1">
                  <div className="reasons-row-img">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="reasons-row-txt">
                    <h4>100% Satisfaction Guarantee</h4>
                    <p>
                      We take our work very seriously. Revisions are on us till
                      you aren’t satisfied with your design.
                    </p>
                  </div>
                </div>

                <div className="reasons-row1">
                  <div className="reasons-row-img">
                    <img src={Icon4} alt="" />
                  </div>
                  <div className="reasons-row-txt">
                    <h4>100% Money Back Guarantee</h4>
                    <p>
                      If you don’t like the work, which is very rare, you get
                      all the money back!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="wsec-8">
        <div className="sec6-heading">
            <h1>Affordable Website Packages for <br />
            Businesses of all sizes</h1>
            <p>
            Our packages are custom made to facilitate businesses of all types
            </p>
          </div>

          <div className="affordable-packages">
            {AffordablePackageslist?.map((Item, index) => {
              return (
                <Col key={0} xs={24} md={12} xl={6}>
                  <div className="bestseller">
                    <WebsitePackages
                      TitleImage={Item.TitleImage}
                      Heading={Item.Heading}
                      Subheading={Item.Subheading}
                      Pricing={Item.Pricing}
                      Discount={Item.Discount}
                      ListHeading={Item.ListHeading}
                      ListItems={Item.ListItems}
                      DeliverableImage={Item.DeliverableImage}
                      LogoStylesHeading={Item.LogoStylesHeading}
                      LogoStyleImage={Item.LogoStyleImage}
                      LogoStyleListItem={Item.LogoStyleListItem}
                      PackageHeading={Item.PackageHeading}
                      PackageListItems={Item.PackageListItems}
                    />
                  </div>
                </Col>
              );
            })}
          </div>
        </div>

    </div>
    </div>
    </div>
  )
}

export default Website