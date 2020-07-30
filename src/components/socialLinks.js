import React from 'react'
import colors from './colors/colors'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';

const SocialLinksWrapper = styled.div`
    position:absolute;
    width:300px;
    bottom:10px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    > * {
      margin:0px 10px;
      height:30px;
    }
    .social-svg-mask:hover{
      fill: ${colors.turquoise}
    }
    @media screen AND (max-width: 1024px){
      display:none;
      visibility:none;
    }
    
`

const SocialLinks = () => (
  <SocialLinksWrapper>
    <SocialIcon url="https://twitter.com/AuxaneN" bgColor="#fff" style={{height: 30, width: 30}}/>
    <SocialIcon url="https://www.linkedin.com/in/auxane-nith/" bgColor="#fff" style={{height: 30, width: 30}}/>
  </SocialLinksWrapper>

)

export default SocialLinks