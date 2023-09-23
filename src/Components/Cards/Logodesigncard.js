import React from "react";
import videoWebm from '../../../src/assets/animation-logo.webm'

const Logodesigncard = (props) => {
  const { LogoImage, Heading, Text } = props.data;
  return (
    <div className="lgdncard" style={{ flex: 1 }}>
      {!props?.video ? (
        <div className="lgdncardimg">
          <img src={LogoImage} alt="" />
        </div>
      ) : (
        <video style={{width: "100%", borderRadius: "20px 20px 0px 0px"}}  loop autoPlay muted>
          <source src={LogoImage} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
        </video>
      )}

      <div className="lgdncardtxt">
        <h5>{Heading}</h5>
        <p>{Text}</p>
      </div>
    </div>
  );
};

export default Logodesigncard;
