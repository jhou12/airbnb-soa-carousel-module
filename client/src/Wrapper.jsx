import React from 'react';
import HouseArray from './HouseArray.jsx'

const Wrapper  = (props) => {
    return (
        <HouseArray
        top12={props.top12}
        array={props.array}
        transform={props.transform}
        />
    )
}

export default Wrapper;