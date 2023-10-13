const AffordablePackages = ({TitleImage, Heading, Subheading, Pricing, Discount, ListHeading, ListItems, DeliverableImage, 
  LogoStylesHeading, LogoStyleImage, LogoStyleListItem, PackageHeading, PackageListItems}) => {
    return(

            <div className="AffordablePackages">
              <img className="img" src={TitleImage} alt="img" />
              <h1>{Heading}</h1>
              <p>{Subheading}</p>
              <p>{Pricing}</p> <span>{Discount}</span>
              <h3>{ListHeading}</h3>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <img className="img" src={DeliverableImage} alt="img" />
              {/* <img className="img" src={DeliverableImage} alt="img" /> */}
              <h2>{LogoStylesHeading}</h2>
              <img className="img" src={LogoStyleImage} alt="img" />
              <li></li>
              <li></li>
              <h2>{PackageHeading}</h2>
              <li></li>
              <li></li>
              <div className="btn1">
                    <button>Select Package</button>
                  </div>
            </div>
            
          )
        }
        export default AffordablePackages;