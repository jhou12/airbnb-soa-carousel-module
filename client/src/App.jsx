import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Wrapper from './Wrapper.jsx'
import HouseArray from './HouseArray.jsx'
import House from './House.jsx'
// import styled from 'styled-components'
import Styles, { Carousel, Test, Title, Buttons, WrapperStyled } from './Styles.js'

const App = () => {
  const [top12, setTop12] = useState([])
  const [array, setArray] = useState(0)
  const [transform, setTransform] = useState(0)

  const arrowLeft = () => {
    if (array === 2 || array === 1) {
      setArray(array - 1)
      setTransform(transform + 125)
     } else {
       setArray(2)
       setTransform(-250)
      }
    }
  const arrowRight = () => {
    if (array === 0 || array === 1) {
      setArray(array + 1)
      setTransform(transform - 125)
     } else {
       setArray(0)
       setTransform(0)
      }
  }
  useEffect(() => {
    axios('/morePlaces/propId/5')
    .then(res =>{
      console.log(res.data)
      setTop12(res.data)
    })
  }, [])

    if (top12.length === 0) {
      return null
    } else {
      return (
        <Carousel>
          <Test>
          State:
          <br/>carousel index: {array}
          <br/>transform: {transform}
          </Test>

          <Title>More places to stay</Title>

          <Buttons>
          <button onClick={arrowLeft}>{'<'}</button>
          <button onClick={arrowRight}>{'>'}</button>
          </Buttons>

          <WrapperStyled>
          <Wrapper
          top12={top12}
          array={array}
          transform={transform}
          />
          </WrapperStyled>
        </Carousel>
      )
    }
}

export default App;