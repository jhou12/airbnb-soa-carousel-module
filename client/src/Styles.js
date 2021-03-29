import { Star } from "@styled-icons/boxicons-solid";
import { ArrowForwardIos } from "@styled-icons/material-rounded/ArrowForwardIos";
import { ArrowBackIos } from "@styled-icons/material-rounded/ArrowBackIos";

// BACKGROUND

export const MaxWidth = window.styled.div`
max-width: 1128px;
display: flex;
justify-items: center;
`;

export const GrayBg = window.styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #F7F7F7;
position: absolute;
left: 0px;
width: 100%;
`;

export const Carousel = window.styled.div`
max-width: 1128px;
display: grid;
font-family: Arial, Helvetica, sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-weight: 300;
width: 87vw;
padding: 30px;
grid-template-columns: 50% 50%;
grid-template-areas:
"test test"
"title buttons"
"wrapper wrapper";
`;

export const Title = window.styled.div`
grid-area: title;
font-size: 22px;
font-weight: 600;
`;

// BUTTONS

export const Buttons = window.styled.div`
grid-area: buttons;
display: flex;
align-items: center;
column-gap: 12px;
margin-left: auto;
`;

export const Counter = window.styled.div`
font-size: 13px;
font-weight: 400;
letter-spacing: 3px;
`;

export const Left = window.styled.button`
height: 32px;
width: 32px;
background-color: white;
border-radius: 20px;
border-style: solid;
border-width: 1px;
border-color: lightgray;
cursor: pointer;
box-shadow: 0px 2px 3px lightgray;
`;

export const Right = window.styled.button`
height: 32px;
width: 32px;
background-color: white;
border-radius: 20px;
border-style: solid;
border-width: 1px;
border-color: lightgray;
cursor: pointer;
box-shadow: 0px 2px 3px lightgray;
`;

// HOUSE CONTAINERS

export const WrapperStyled = window.styled.div`
grid-area: wrapper;
width: 85vw;
// overflow: scroll;
overflow: hidden;
max-width: 1128px;
`;

export const ArrayStyled = window.styled.div`
display: flex;
width: 80vw;
column-gap: 17px;
`;

// HOUSE

export const HouseStyled = window.styled.div`
`;

export const HousePic = window.styled.img`
width: 20vw;
height: 13vw;
border-radius: 10px;
`;

export const RatingLine = window.styled.div`
display: flex;
align-items: center;
font-size: 14px;
column-gap: 2px;
`;

export const ReviewCount = window.styled.div`
color: gray;
`;

export const Details = window.styled.div`
font-size: 17px;
`;

export const Description = window.styled.div`
font-size: 17px;
`;

export const PriceLine = window.styled.div`
display: flex;
align-items: center;
column-gap: 6px;
font-size: 16px;
`;

export const Price = window.styled.div`
font-weight: 700;
`;

export const Superhost = window.styled.div`
color: lightgray;
`;

// TODO

export const TODOCarousel = window.styled.div`
max-width: 1128px;
display: grid;
font-family: Arial, Helvetica, sans-serif;
font-family: 'Nunito Sans', sans-serif;
font-weight: 300;
width: 87vw;
padding: 30px;
grid-template-columns: 50% 50%;
grid-template-areas:
"TODOtest TODOtest"
"title buttons"
"TODOwrapper TODOwrapper"
"TODOline TODOline";
`;

export const TODOWrapperStyled = window.styled.div`
grid-area: TODOwrapper;
width: 85vw;
// overflow: scroll;
overflow: hidden;
max-width: 1128px;
`;

export const TODOArrayStyled = window.styled.div`
position: relative;
display: flex;
width: 80vw;
column-gap: 17px;
`;

// TODOHOUSE

export const TODOHouseStyled = window.styled.div`
`;

export const TODOHousePic = window.styled.img`
width: 16vw;
border-radius: 10px;
`;

export const TODORatingLine = window.styled.div`
display: flex;
align-items: center;
font-size: 14px;
column-gap: 2px;
`;

export const TODOReviewCount = window.styled.div`
color: gray;
`;

export const TODODescription = window.styled.div`
font-size: 17px;
width: 16vw;
`;

export const TODOPriceLine = window.styled.div`
display: flex;
align-items: center;
column-gap: 6px;
font-size: 16px;
`;

export const TODOPrice = window.styled.div`
font-weight: 700;
`;

export const TODOLine = window.styled.div`
grid-area: TODOline;
position: absolute;
left: 0;
bottom: 10px;
width: 100%;
height: 1px;
background-color: lightgray;
`;

// ICONS

export const PinkStar = window.styled(Star)`
color: #FF385C;
width: 15px;
`;

export const ArrowIconRight = window.styled(ArrowForwardIos)`
width: 15px;
`;

export const ArrowIconLeft = window.styled(ArrowBackIos)`
position: relative;
left: 3px;
width: 15px;
`;
