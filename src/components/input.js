import React from 'react'
import styled from 'styled-components'

import colors from './colors/colors'

const StyledInput = styled.input`
height:50px;
width:500px;
box-shadow:${colors.boxShadow};
display : flex;
flex-direction: column;
`
const StyledLabel = styled.label`
  margin: 15px 0px;
  position:relative;
  span{
      position:absolute;
      bottom:0.5em;
      padding: 0px 10px;
      transition:0.5s;
    }
  :focus-within{
    span{
      bottom:2.7em;
      font-size:10px;
      transition:0.5s;
    } 
  }
`

const Input = (props) => (
  <StyledLabel htmlFor={props.id}>
    <span>{props.label}</span>
    <StyledInput id={props.id} {...props} />
  </StyledLabel>

)

export default Input