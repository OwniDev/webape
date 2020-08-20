import React from "react";

import CardWrapper from './cardWrapper'

import TemplateBottomRow from './templateBottomRow'
import styled from 'styled-components'
// import colors from './colors/colors'

const GridContainer = styled.div`
flex:2 0 20em;
width: 100%;
max-width:80vw;
height:500px;
display: grid;
row-gap:20px;
column-gap:20px;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: 2fr 1fr 1fr;
grid-template-areas:
"one two two"
"one three four";
  .image-one{
    grid-area:one;
    background-color:red;
  }
  .image-two{
    grid-area:two;
    background-color:orange;
  }
  .image-three{
    grid-area:three;
    background-color:coral;
  }
  .image-four{
    grid-area:four;
    background-color:yellow;
  }
@media screen AND (max-width:800px){
  grid-template-colums:1fr 1fr;
  grid-template-areas:
  "one one one"
  "one one one";
  .image-two{
    display:none;
  }
  .image-three{
    display:none;
  }
  .image-four{
    display:none;
  }
}

`
const TemplateCardWrapper = styled.div`
max-height:700px;
max-width:900px;
width:80vw;
display:flex;
flex-direction:column;
justify-content:center;
`
const TemplateCard = (props)=>{  
  return(
    <CardWrapper >
      <TemplateCardWrapper>
        <GridContainer>
          <div className="image-one">Main image</div>
          <div className="image-two">Secondary image</div>
          <div className="image-three">Tertiary image</div>
          <div className="image-four">Tertiary image</div>
        </GridContainer>  
        <TemplateBottomRow {...props}/>
      </TemplateCardWrapper>
  </CardWrapper>
  
  )

}

export default TemplateCard