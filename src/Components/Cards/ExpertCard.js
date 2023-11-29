import React from 'react'

const expertcard = (props) => {
    const { ExpertImg, Heading, Text } = props.data
    return (
    <div className="expertcard">
            <div className="expertcardimg">
                <img src={ExpertImg} alt="" />
                <h1>{Heading}</h1>
                <p>{Text}</p>
            </div>
        </div>
  )
}

export default expertcard
