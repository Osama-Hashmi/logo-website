import React from "react";
import { Row, Col } from "antd";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import alo from "../assets/alo.webp";
import c1 from "../assets/c1_1x.webp";
import work from "../assets/work5_1x.webp";
import work8 from "../assets/work8_1x.webp";
import work2 from "../assets/work2_1x.webp";
import work6 from "../assets/work6_1x.webp";
import work9 from "../assets/work9_1x.webp";
import work3 from "../assets/work3_1x.webp";
import work7 from "../assets/work7_1x.webp";
import work10 from "../assets/work10_1x.webp";
import work4 from "../assets/work4_1x.webp";
import work11 from "../assets/work11_1x.webp";
import logo1 from "../assets/logo1_1x.webp";
import logo2 from "../assets/logo2_1x.webp";
import logo3 from "../assets/logo3_1x.webp";
import logo4 from "../assets/logo4_1x.webp";
import logo5 from "../assets/logo5_1x.webp";
import logo6 from "../assets/logo6_1x.webp";
import benefit from "../assets/benefits-side1_1x.webp";
import C4 from "../assets/c4_1x.webp";
import C7 from "../assets/c7_1x.webp";
import Modern from "../assets/modern1_1x.webp";
import Modern2 from "../assets/modern2_1x.webp";
import Modern3 from "../assets/modern3_1x.webp";
import Modern4 from "../assets/animation-logo.mp4";
import Bundle from "../assets/logo-side_1x.webp"
import Design from "../assets/package-side_1x.webp"
import Kitchen from "../assets/2d-3d-mockups-03.webp"
import Accounting7 from "../assets/accounting-07.webp"
import Accounting09 from "../assets/accounting-09.webp"
// import Accounting07 from "../assets/accounting-07-1.webp"
import Adtech from "../assets/advertising-agency-02.webp"
import Mediatune from "../assets/advertising-agency-10.webp"
import Anniversary from "../assets/anniversary-02.webp"
import Pet from "../assets/animals-pets-05.webp"
import Architecture from "../assets/architectural-01.webp"
import Automotive from "../assets/automotive-05.webp"
import Architectural from "../assets/architectural-11.webp"
import Business from "../assets/business-consulting-14.webp"
import Art from "../assets/art-design-15.webp"
import Custom from "../assets/custom-side_1x.webp"
import Icon1 from "../assets/icon_designer_1x.webp"
import Icon2 from "../assets/icons_247_1x.webp"
import Icon3 from "../assets/icons_100_1x.webp"
import Icon4 from "../assets/icon_guarantee_1x.webp"
import Package1x from "../assets/package1_1x.webp"
import ImagesIcon1x from "../assets/images-icon_1x.webp"
import LogoStyles1x from "../assets/logo-styles_1x.webp"
import Tend from "../assets/package2_1x.webp"
import Melt from "../assets/package3_1x.webp"
import ImagesIconAll_1x from "../assets/images-icon-all_1x.webp"







import SmallCard from "../Components/Cards/SmallCard";
import Logodesigncard from "../Components/Cards/Logodesigncard";
import ImpressiveLogos from "../Components/Cards/ImpressiveLogos";
import AffordablePackages from "../Components/Cards/AffordablePackages";
import Item from "antd/es/list/Item";






const Home = () => {
  const CardData = [
    {
      Image: alo,
      UserImage: c1,
      Name: "Ana Shvets",
    },
    {
      Image: work2,
      UserImage: C4,
      Name: "Rene Asmussen",
    },
    {
      Image: work3,
      UserImage: C7,
      Name: "Spencer Selover",
    },
    {
      Image: work4,
      UserImage: c1,
      Name: "Eduardo Rosas",
    },
    {
      Image: work,
      UserImage: c1,
      Name: "Jonathan Meza",
    },
    {
      Image: work6,
      UserImage: c1,
      Name: "Beatriz Braga",
    },
    {
      Image: work7,
      UserImage: c1,
      Name: "Giang Trương",
    },
    {
      Image: work11,
      UserImage: c1,
      Name: "Ksenia Chernaya",
    },
    {
      Image: work8,
      UserImage: c1,
      Name: "Gustavo Fring",
    },
    {
      Image: work9,
      UserImage: c1,
      Name: "Daniel Tran",
    },
    {
      Image: work10,
      UserImage: c1,
      Name: "Leticia Ribeiro",
    },
  ];

  const logoDesignCardData = [
    {
      LogoImage: Modern,
      Heading: "Iconic Logo Design",
      Text: "Ingenuity is the key to being distinctive, and our logo design packages ensure that your business stands out right away. Our designers are skilled at producing iconic logo designs that look modern with perfect competence, transcending the restrained limitations of conventional creativity.",
    },
    {
      LogoImage: Modern2,
      Heading: "Typographic Logo Design",
      Text: "Fonts used in typographic logo designs amplify a brand's message. Our team of expert logo designers ensures that your brand's message readily cuts through the noise produced by your competitors by perfectly harmonizing the typography of the logo design with all of its other features.",
    },
    {
      LogoImage: Modern3,
      Heading: "Illustrative Logo Design",
      Text: "We create illustrative logos that are distinctive in an aesthetic sense and highlight your brand's USP attributes correctly. Our illustrative logo designs are of the highest calibre, and speak for themselves.",
    },
    {
      LogoImage: Modern4,
      Heading: "Animated Logo Design",
      Text: "Brands looking to push the boundaries of conventional thinking can get the edge they are looking for via animated logos. Our animated logos are of the highest quality and are always successful in grasping the attention of the audience.",
    },
  ];

  const ImpressiveLogosData = [
    {
      Image: Kitchen,
    },
    {
      Image: Accounting7,
    },
    {
      Image: Accounting09,
    },
    {
      Image: Adtech,
    },
    {
      Image: Anniversary,
    },
    {
      Image: Pet,
    },
    {
      Image: Mediatune,
    },
    {
      Image: Architecture,
    },
    {
      Image: Automotive,
    },
    {
      Image: Architectural,
    },
    {
      Image: Business,
    },
    {
      Image: Art,
    }
  ]

  const AffordablePackageslist = [
    {
    TitleImage:  Package1x,
    Heading: "Best Seller", 
    Subheading: "Ideal solution for beginners", 
    Pricing: "$29", 
    Discount: "$145 80% Off!",
    ListHeading: "PACKAGE INCLUDES:", 
    ListItems: ["4 Logo Design Concepts", "5 Revision Cycle", "1 Dedicated Designer", "24/7 Chat Support", "Free Color Options",
    "Free Fav Icon", "Print Friendly Design"],
    DeliverableImage: ImagesIcon1x, 
    LogoStylesHeading: "Logo Styles Included:", 
    LogoStyleImage: LogoStyles1x, 
    LogoStyleListItem: ["Wordmark/Logotype", "Signature/Script"],
    PackageHeading: "WHEN TO CHOOSE THIS PACKAGE:",
    PackageListItems: ["100% Ownership Rights", "100% Money Back Guarantee"],
    },

    {
    TitleImage:  Tend,
    Heading: "The Ultimate", 
    Subheading: "Startup-friendly design package", 
    Pricing: "$69", 
    Discount: "$345 80% Off!",
    ListHeading: "PACKAGE INCLUDES:", 
    ListItems: ["6 Logo Design Concepts", "Unlimited Revisions", "2 Dedicated Designers", "Free Color Options", 
    "Free Grayscale Format", "Free Icon", "24 To 48 Hours TAT", "Print Friendly Design"],
    DeliverableImage: ImagesIcon1x, 
    LogoStylesHeading: "Logo Styles Included:", 
    LogoStyleImage: LogoStyles1x, 
    LogoStyleListItem: ["Wordmark/Logotype, Brandmark,", "Lettermark, Emblem"],
    PackageHeading: "WHEN TO CHOOSE THIS PACKAGE:",
    PackageListItems: ["100% Ownership Rights", "100% Money Back Guarantee"],
    },

    {
      TitleImage:  Melt,
      Heading: "The Ultimate", 
      Subheading: "Startup-friendly design package", 
      Pricing: "$99", 
      Discount: "$495 80% Off!",
      ListHeading: "PACKAGE INCLUDES:", 
      ListItems: ["8 Logo Design Concepts", "Unlimited Revisions", "3 Dedicated Designers", 
      "Free Stationery Design (Business Card, Letterhead, Envelope)", "Free Icon", "Free Color Options", "Free Grayscale Format",
      "24 To 48 Hours TAT", "$50 Off On Website Order", "All File Formats (Ai, PSD, EPS, PNG, JPG, PDF)"],
      DeliverableImage: ImagesIconAll_1x, 
      LogoStylesHeading: "Logo Styles Included:", 
      LogoStyleImage: LogoStyles1x, 
      LogoStyleListItem: ["Wordmark/Logotype", "Signature/Script"],
      PackageHeading: "WHEN TO CHOOSE THIS PACKAGE:",
      PackageListItems: ["100% Ownership Rights", "100% Money Back Guarantee"],
      },
  ]

  return (
    <div className="main">
      <Navbar />
      <div className="home">
        <div className="head">
          <Row gutter={[20, 20]}>
            <Col xs={24} md={24} lg={12}>
              <div className="textss">
                <h1>
                  A Logo Design Agency Trusted by Startups & Billion Dollar
                  Companies
                </h1>
                <p>
                  We are a global agency, creating brands that stay in the
                  hearts and minds of consumers forever.
                </p>
                <div className="btn">
                  <div className="btn1">
                    <button>Start Your Project With Us</button>
                  </div>
                  <div className="btn2">
                    <button>Live Chat</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={24} lg={12}>
              <Row gutter={[30, 30]}>
                {CardData.map((data, i) => (
                  <Col xs={12} lg={6} key={i} className="cardss">
                    <SmallCard
                      Image={data.Image}
                      UserImage={data.UserImage}
                      Name={data.Name}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <div className="logos">
            <div className="cols">
              {/* <div className="col1">
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
          </div> */}
              {/* <div className="col1">
                <SmallCard Image={work} UserImage={c1} Name="Jonathan Meza" />
                <SmallCard Image={work8} UserImage={c1} Name="Gustavo Fring" />
              </div>

              <div className="col2">
                <SmallCard Image={work2} UserImage={c1} Name="Rene Asmussen" />
                <SmallCard Image={work6} UserImage={c1} Name="Beatriz Braga" />
                <SmallCard Image={work9} UserImage={c1} Name="Daniel Tran" />
              </div>

              <div className="col3">
                <SmallCard
                  Image={work3} UserImage={c1} Name="Spencer Selover"
                />
                <SmallCard Image={work7} UserImage={c1} Name="Giang Trương" />
                <SmallCard
                  Image={work10} UserImage={c1} Name="Leticia Ribeiro"
                />
              </div>

              <div className="col4">
                <SmallCard Image={work4} UserImage={c1} Name="Eduardo Rosas" />
                <SmallCard
                  Image={work11} UserImage={c1} Name="Ksenia Chernaya"
                />
              </div> */}

              {/* <div className="col2">
                <div className="crd1">
                  <img src={work2} alt="img" />
                  <p>
                    <img src={c1} alt="" /> Rene Asmussen
                  </p>
                </div>
                <div className="crd1">
                  <img src={work6} alt="img" />
                  <p>
                    <img src={c1} alt="" /> Beatriz Braga
                  </p>
                </div>
                <div className="crd1">
                  <img src={work9} alt="img" />
                  <p>
                    <img src={c1} alt="" />
                    Daniel Tran
                  </p>
                </div>
              </div> */}

              {/* <div className="col3">
                <div className="crd1">
                  <img src={work3} alt="img" />
                  <p>
                    <img src={c1} alt="img" />
                    Spencer Selover
                  </p>
                </div>
                <div className="crd1">
                  <img src={work7} alt="img" />
                  <p>
                    <img src={c1} alt="" />
                    Giang Trương
                  </p>
                </div>
                <div className="crd1">
                  <img src={work10} alt="img" />
                  <p>
                    <img src={c1} alt="" />
                    Leticia Ribeiro
                  </p>
                </div>
              </div> */}

              {/* <div className="col4">
                <div className="crd1">
                  <img src={work4} alt="img" />
                  <p>
                    <img src={c1} alt="" />
                    Eduardo Rosas
                  </p>
                </div>
                <div className="crd1">
                  <img src={work11} alt="img" />
                  <p>
                    <img src={c1} alt="" />
                    Ksenia Chernaya
                  </p>
                </div>
              </div> */}
              {/* <div className="crd1">
              <img src={alo} alt="img" />
              <p><img src={c1} alt="" /> Anna shvets</p>
            </div> */}
            </div>
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

        <div className="custom-logo">
          <div className="custom-logo-heading">
            <h1>Reasons a Logo in Important</h1>
          </div>
          <div className="custom-logo-body">
            <div className="custom-logo-text">
              <h2>Marks your identity</h2>
              <br />
              <p>
                Do you recall the classic Western movies in which cowboys
                branded their cattle? It was done to indicate ownership. The
                same should apply to your logo (minus the pain of a red hot
                branding iron). Your company logo design, which is imprinted on
                your goods, business cards, and website, conveys ownership. It
                can inform the public and potential clients about your identity,
                the kind of goods or services you provide, and the advantages
                you give to customers.
              </p>
            </div>
            <div className="custom-logo-img">
              <img src={benefit} alt="" />
            </div>
          </div>
        </div>
        <div className="difbtn">
          <div className="btn">
            <div className="btn1">
              <button>Get Started</button>
            </div>
            <div className="btn2">
              <button>Live Chat</button>
            </div>
          </div>
        </div>

        <div className="logodesign" >
          <div className="logodesigntext">
            <h1>Appealing Logo Designs for Every Business</h1>
            <p>Beautiful logo designs that clearly convey your message</p>
          </div>

          <div className="logodesigncards">
            <Row gutter={[30, 30]}>
              {logoDesignCardData?.map((data, index) => {
                return (
                  <Col key={index} xs={24} md={12} xl={6}>
                    <Logodesigncard video={index === 3} data={data} />
                  </Col>
                );
              })}
            </Row>
            {/* <div className="lgdncard">
              <div className="lgdncardimg">
                <img src={Modern} alt="" />
              </div>
              <div className="lgdncardtxt">
                <h5>Iconic Logo Design</h5>
                <p>
                  Ingenuity is the key to being distinctive, and our logo design
                  packages ensure that your business stands out right away. Our
                  designers are skilled at producing iconic logo designs that
                  look modern with perfect competence, transcending the
                  restrained limitations of conventional creativity.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        
        <div className="section3">
          <div className="container">
            <div className="bundlepackage">
              <div className="bundlepackagetxt">
            <h3>Save 100s, get our bundle package today.</h3>
            <p>Logo, website and stationery get everything designed in a pocket-friendly package.</p>
              
            <div className="btn1">
                <button>View All Bundle Packages</button>
              </div>
              </div>
              
              <div className="bundlepackageimage">
                <img src={Bundle} alt="" />
              </div>
            </div>

            <div className="designpackage">
              <div className="designpackagetxt">
            <h3>Looking for a custom logo design package?</h3>
            <p>Speak to our design consultant today – absolutely free!</p>
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
        

        <div className="section4">
          <div className="section4-container">
            <div className="sec-4-txt">
              <h1>Have a look at some of our logo designs</h1>
              <p>We have won many awards for our impressive logos, here is why:</p>
            </div>

            <div className="sec-4-imgs">
              <div className="ImpressiveLogos">

            <Col xs={24} md={24} lg={12}>
              <Row gutter={[30, 30]}>
                {ImpressiveLogosData.map((data, i) => (
                  <Col xs={12} lg={6} key={i} className="ImpressiveLogos">
                    <ImpressiveLogos
                      Image={data.Image}
                      />
                  </Col>
                ))}
              </Row>
            </Col>
                </div>

            </div>
                
                <div className="sec-4-txt-lnk">
                  <p>Want to see more?</p> 
                  <a href="#">View Our Logo Portfolio</a>
                </div>

          </div>
        </div>

              <div className="impressivelogobtns">
                <div className="btn">
                  <div className="btn1">
                    <button>Get Started</button>
                  </div>
                  <div className="btn2">
                    <button>Live Chat</button>
                  </div>
                </div>
              </div>



              <div className="section5">
                <div className="reasons">
                  <div className="reasons-img">
                    <img src={Custom} alt="" />
                  </div>

                  <div className="reasons-txt">
                    <div className="reasons-txt-head">
                      <h2>Reasons to Choose Logo Eminent</h2>
                      <p>We offer exceptional logo design services at incredibly pocket-friendly cost. Some of the reasons we are the first choice of many small businesses include:</p>
                    </div>

                      <div className="reasons-row">
                        <div className="reasons-row1">                        
                        <div className="reasons-row-img">
                            <img src={Icon1} alt="" />
                        </div>
                        <div className="reasons-row-txt">
                          <h4>Winners of Awards in Design</h4>
                          <p>Numerous awards have been given to our logo designers for their branding and design work.</p>
                        </div>
                      </div>

                      <div className="reasons-row1">                        
                        <div className="reasons-row-img">
                            <img src={Icon2} alt="" />
                        </div>
                        <div className="reasons-row-txt">
                          <h4>Free 24/7 Consultancy</h4>
                          <p>We are available to help you 24/7. For any questions or concerns, contact us.</p>
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
                          <p>We take our work very seriously. Revisions are on us till you aren’t satisfied with your design.</p>
                        </div>
                      </div>

                      <div className="reasons-row1">                        
                        <div className="reasons-row-img">
                            <img src={Icon4} alt="" />
                        </div>
                        <div className="reasons-row-txt">
                          <h4>100% Money Back Guarantee</h4>
                          <p>If you don’t like the work, which is very rare, you get all the money back!</p>
                        </div>
                      </div>
                      </div>



                  </div>
                </div>
              </div>


              <div className="sec6">
                <div className="sec6-heading">
                    <h1>Affordable Business Logo Design Packages</h1>
                    <p>No matter what is the size of your business, we have a package for you.</p>
                </div>

                <div className="affordable-packages">
                  {AffordablePackageslist?.map((Item,index)=>{
                    return(
                      <Col key={0} xs={24} md={12} xl={6}>
                          <div className="bestseller">
                        <AffordablePackages
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
                       )
                      })}


                </div>
              
              
              
              
              
              
              </div>

              
              <div className="sec7">
                
              </div>

      </div>
    </div>
  );
};

export default Home;
