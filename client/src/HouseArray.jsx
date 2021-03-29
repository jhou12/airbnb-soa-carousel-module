import React from 'react';
import House from './House.jsx'
import Styles, { ArrayStyled } from './Styles.js'

const HouseArray = (props) => {
    const styles = {
      transform: `translateX(${props.transform}vw)`,
      transition: '.5s',
    }
    return (
      <ArrayStyled style={styles}>
        {props.top12.map(house => <House details={house}/>)}
      </ArrayStyled>
    )
}

export default HouseArray;