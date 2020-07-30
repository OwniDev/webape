import React from 'react'
import styled, {keyframes} from 'styled-components'

import colors from './colors/colors'
import Centered from '../components/centered'


const ComingSoonWrapper = styled.div`
  z-index:1;
  position: absolute;
  position:absolute;
  bottom:0px;
  right: 0px;
  top: 0px;
  left:0px;
  background-color:${colors.turquoise};
  overflow:hidden;

`


const Overlay = styled.div`
  z-index:1;
  position: absolute;
  bottom:0px;
  right: 0px;
  top: 0px;
  left:0px;
  background-color:#00D1AE7D;
  overflow:hidden;
`

const BGKey = keyframes`
 from { transform: translate(0, 0); }
    to { transform: translate(-25%, 25%); }
`

const BG = styled.div`
height:2000px;
width:2000px;
  position: absolute;
  background: url('../../repeat_pattern.png') repeat top right fixed ;
  background-size:500px;
  top: -100%;
  bottom: 0;
  left: 0;
  animation: ${BGKey} 5s linear 0s infinite;
`

const BoxH2 = styled.h2`
position:relative;
z-index:99;
padding:40px;
background-color:white;
border-radius:5px;
max-width: max-content;
text-align:center;
margin:auto auto;
font-weight:lighter;
`
const ComingSoon = () =>(
  <ComingSoonWrapper>
    <Centered style={{zIndex:'99'}}>
      <BoxH2 >Page en construction,<br/>ça arrive très vite :)</BoxH2>
    </Centered>
      <Overlay />
      <BG />
  </ComingSoonWrapper>
)

export default ComingSoon;