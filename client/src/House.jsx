import React from 'react';
import Styles, { HouseStyled, HousePic, PinkStar, RatingLine, Description, Price, PriceLine, Details, ReviewCount, Superhost } from './Styles.js'

const House = (props) => {
    return (
      <HouseStyled>
          <br/>{<HousePic src={props.details.houseUrl}/>}

          <br/><RatingLine>
            <PinkStar/>
            {props.details.overallRating} <ReviewCount>({props.details.totalReviews})</ReviewCount>
          </RatingLine>

          <Details>
            {props.details.houseType} · {props.details.bedrooms} beds
            </Details>

          <Description>
          {props.details.houseTitle}
          <br/><PriceLine>
            <Price>${props.details.totalPrice}</Price> / night
            </PriceLine>
          </Description>
      </HouseStyled>
    )
}

export default House;