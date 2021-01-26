import React from 'react'
import {Link} from 'gatsby';
import styled from 'styled-components'
import colors from './colors/colors'

const ButtonWrapper = styled(Link)`
height: 45px;
background: ${props => props.reverse ? '#ffffff' : '#00D1AE'};
box-shadow: ${colors.boxShadow};
border-radius: 5px;
border: 1px solid #00D1AE;
padding:0.5rem 1rem;
text-decoration: none;
max-width:max-content;
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
    transition: 0.5s ease-in;
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

const WAButton = ({link, children, reverse}) => (
  <ButtonWrapper to={link} reverse={reverse}>
    <span className="text">{children}</span>
    <span className="carret">&nbsp;</span>
  </ButtonWrapper>
)
export default WAButton