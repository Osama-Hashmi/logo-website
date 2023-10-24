import google1x from "../../assets/google_1x.webp"
import Stars from "../../assets/stars_1x.webp"

const TestimonialCards = ({Pname, Name, Content, Color}) => {
  return (
    <div className="revCard">
      <div className="revhead">
        <div className="revtop">
          <div className="rev-avatar">
            <div className="profileImage" style={{backgroundColor: Color}}>{Pname}
            </div>
            <div className="rev-author">
              <p>{Name}</p>
              <img src={Stars} alt="" />
          </div>
            </div>
              <img src={google1x} alt="" />
         </div>
        <div className="rev-content">
          <p>{Content}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
