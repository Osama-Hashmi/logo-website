const AffordablePackages = ({TitleImage, Heading, Subheading, Pricing, Discount, ListHeading, ListItems, DeliverableImage, 
  LogoStylesHeading, LogoStyleImage, LogoStyleListItem, PackageHeading, PackageListItems}) => {
    return(

            <div className="AffordablePackages">
              <img className="img" src={TitleImage} alt="img" width={416} />
              <div className="package-detail">
              <h1>{Heading}</h1>
              <p>{Subheading}</p>
              <div className="pricing-Span">
              <p className="Pricing">{Pricing}</p> <span className="discount-span">{Discount}</span>
              </div>
              <h3>{ListHeading}</h3>
              <ul>

              {ListItems.map((Item)=>{
                
                return(<li>{Item}</li>)
              })}
              </ul>
              <img className="img" src={DeliverableImage} alt="img" />
              {/* <img className="img" src={DeliverableImage} alt="img" /> */}
              <h2>{LogoStylesHeading}</h2>
              <img className="img" src={LogoStyleImage} alt="img" />
              <ul>

              {LogoStyleListItem.map((Item)=>{
                
                return(<li>{Item}</li>)
              })}
              </ul>
              <h2>{PackageHeading}</h2>
              <ul>

              {PackageListItems.map((Item)=>{
                
                return(<li>{Item}</li>)
              })}
              </ul>
              </div>
              <div className="btn1">
                    <button>Select Package</button>
                  </div>
            </div>
            
          )
        }
        export default AffordablePackages;