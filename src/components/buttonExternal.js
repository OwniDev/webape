import React from 'react'
import styled from 'styled-components'
import colors from './colors/colors'

const ButtonWrapper = styled.a`
height: 45px;
background: ${props => props.reverse ? '#ffffff' : '#00D1AE'};
box-shadow: ${colors.boxShadow};
border-radius: 5px;
border: 1px solid #00D1AE;
padding:10px 20px;
text-decoration: none;
max-width:max-content;
transition: 0.5s ease-out;

  .text{
    margin-right:50px;
    color: ${props => props.reverse ? '#00D1AE' : 'white'};
  }
  .carret{
    display:inline-block;
    height:15px;
    width:15px;
    border-style:solid;
    border-width: 0px 1px 1px 0px;
    border-color:${props => props.reverse ? '#00D1AE' : 'white'};
    transform:rotate(-45deg);
    vertical-align: middle;
  }

  :hover{
    background: ${props => props.reverse ? '#00D1AE' : '#ffffff' };
    border: 1px solid #00D1AE;
    transition: 0.5s ease-out;
    .text{
    color: ${props => props.reverse ? 'white' : '#00D1AE'};
    transition: 0.5s ease-in;
    }
    .carret{
      border-color: ${props => props.reverse ? 'white' : '#00D1AE'};
    transition: 0.5s ease-in;

    }
  }
  @media screen and (max-width:550px){
    .text{
    margin-right:0px;
    }
    .carret{
      display: none;
    }
  }
`

const WAExternalButton = ({link, children, reverse}) => (
  <ButtonWrapper href={link} reverse={reverse} target="_blank" rel="noreferrer">
    <span className="text">{children}</span>
    <span className="carret">&nbsp;</span>
  </ButtonWrapper>
)
export default WAExternalButton