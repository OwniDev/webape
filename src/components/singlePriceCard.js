import React from 'react'
import styled from 'styled-components'
import colors from './colors/colors'

import PriceStyles from './priceStyles'

const SinglePriceCardWrapper = styled.div`
  background-color:#fff;
  border-radius:5px;
  padding:20px;
  height:100%;

  display:flex;
  flex-direction:column;
   justify-content:space-between;

   box-shadow:${colors.boxShadow};
   transition:0.5s ease-out;
   
   color: #4B474C;
   *{
     text-align:center
   }
   :hover{
   box-shadow: 0px 60px 49px rgba(22, 69, 62, 0.13); 
   transition:0.5s ease-in;
   }
   
`

const SinglePriceCard = ({title, description, price}) => (
  <SinglePriceCardWrapper>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>
    À partir de<br/>
    <PriceStyles>{price}</PriceStyles>
    </p>
  </SinglePriceCardWrapper>
)

export default SinglePriceCard;