const SmallCard = ({Image, UserImage, Name}) => {
    return(
        // <div className="col1">
            <div className="crd1">
              <img src={Image} alt="img" />
              <p><img src={UserImage} alt="" /> {Name}</p>
            </div>
            
          // </div>
    )
}
export default SmallCard;