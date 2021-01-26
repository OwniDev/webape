import React from 'react'
import styled from 'styled-components'
import colors from './colors/colors'

const WAFormButtonWrapper = styled.button`
height: 45px;
background: ${props => props.reverse ? '#ffffff' : '#00D1AE'};
box-shadow: ${colors.boxShadow};
border-radius: 5px;
border: 1px solid ${props => props.reverse ? '#00D1AE' : 'white'};
padding:10px 20px;
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
`

const WAFormButton = ({children, reverse}) => (
  <WAFormButtonWrapper type="submit" reverse={reverse}>
    <span className="text">{children}</span>
    <span className="carret">&nbsp;</span>
  </WAFormButtonWrapper>
)
export default WAFormButton