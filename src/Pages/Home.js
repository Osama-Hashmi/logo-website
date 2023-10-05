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

import SmallCard from "../Components/Cards/SmallCard";
import Logodesigncard from "../Components/Cards/Logodesigncard";

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
              </div>
            </div>

            <div className="designpackage">
              <div className="designpackagetxt">
            <h3>Looking for a custom logo design package?</h3>
            <p>Speak to our design consultant today – absolutely free!</p>
              </div>
            </div>
          </div>
        </div>






      </div>
    </div>
  );
};

export default Home;
