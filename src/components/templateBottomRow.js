import React from 'react'
import WAButton from './button'
import styled from 'styled-components'

const BottomRowWrapper = styled.div`
flex:0 1 30%;
  .right, .left{
    display:inline-block;
    width:calc(50% - 20px);
  }
  .right{
    margin-left:20px;
    vertical-align:top;
    display:inline-flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-end;
    >* {
      margin : 5px 0px;
    }
  }

  h4{
    margin:10px 0px;
  }
  @media screen and (max-width:649px){
    .right, .left{
    display:block;
    width:100%;
    }
    .right{
      display:flex;
      margin-left:0px;
      flex-direction:row;
      justify-content: space-between;
    }
  }

`

const TemplateBottomRow = ({title, description, demo, download})=>(
  <BottomRowWrapper>
    <div className="left">
      <h4>{title}</h4>
      {description}     
    </div>
    <div className="right">
      <WAButton link={demo} reverse>Site démo</WAButton>
      <WAButton link={download}>Téléchargement</WAButton> 
    </div>
  </BottomRowWrapper>
);

export default TemplateBottomRow;