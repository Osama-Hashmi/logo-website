import React from "react";

const WeDesignCard = (props) => {
  const { WeImage, Heading, Text } = props.data;
  return (
    <div className="lgdncard" style={{ flex: 1 }}>
        
        <div className="lgdncardimg">
          <img src={WeImage} alt="" />
        </div>
        


      <div className="lgdncardtxt">
        <h1>{Heading}</h1>
        <p>{Text}</p>
      </div>
    </div>
  );
};

export default WeDesignCard;
