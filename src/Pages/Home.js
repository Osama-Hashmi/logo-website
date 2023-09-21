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

import SmallCard from "../Components/Cards/SmallCard";

const Home = () => {
  const CardData = [
    {
      Image: alo,
      UserImage: c1,
      Name: 'Ana Shvets'
    },
    {
      Image: work2,
      UserImage: c1,
      Name: 'Rene Asmussen'
    },
    {
      Image: work3 ,
      UserImage: c1,
      Name: 'Spencer Selover'
    },
    {
      Image: work4 ,
      UserImage: c1,
      Name: 'Eduardo Rosas'
    },
    {
      Image: work ,
      UserImage: c1,
      Name: 'Jonathan Meza'
    },
    {
      Image: work6 ,
      UserImage: c1,
      Name: 'Beatriz Braga'
    },
    {
      Image: work7 ,
      UserImage: c1,
      Name: 'Giang Trương'
    },
    {
      Image: work11 ,
      UserImage: c1,
      Name: 'Ksenia Chernaya'
    },
    {
      Image: work8 ,
      UserImage: c1,
      Name: 'Gustavo Fring'
    },
    {
      Image: work9 ,
      UserImage: c1,
      Name: 'Daniel Tran'
    },
    {
      Image: work10 ,
      UserImage: c1,
      Name: 'Leticia Ribeiro'
    },


  ]
  return (
    <div className="main">
      <Navbar />
      <div className="home">
        <div className="head">
          <Row gutter={[20,20]}>
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
              <Row>
                {
                  CardData.map((data, i) => (
                <Col xs={12} lg={6} key={i} className='cardss'>
              <SmallCard Image={data.Image} UserImage={data.UserImage} Name={data.Name} />

                </Col>

                  ))
                }
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
      </div>
    </div>
  );
};

export default Home;
