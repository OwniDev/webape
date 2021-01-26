import React from 'react'
import styled from 'styled-components'

import colors from './colors/colors'

const StyledTextArea = styled.textarea`
height:200px;
width:500px;

box-shadow:${colors.boxShadow};
position:relative;
display : flex;
flex-direction: column;
`
const StyledLabel = styled.label`
  margin: 15px 0px;
  position:relative;
  
`
const TextArea = (props) => (
  <StyledLabel htmlFor={props.id}>
    <span>{props.label}</span>
    <StyledTextArea id={props.id} {...props} />
  </StyledLabel>

)

export default TextArea