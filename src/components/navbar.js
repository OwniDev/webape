import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"

import colors from './colors/colors'

import WANegNoBase from './images/WANegNoBase'
import MenuLinks from './menuLinks'
import SocialLinks from './socialLinks'


const NavbarWrapper = styled.div`
  background-color: ${colors.black};
  color: #000;
  width:300px;
  height:100vh;
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:space-around;

  @media screen AND (max-width: 1000px){
    width:100vw;
    height: 50px;
    position:fixed;
    bottom:0px;
    left:0px;
    z-index:99;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
  }
`


const Navbar = () => (
  <NavbarWrapper>
      <WANegNoBase/>
      <MenuLinks/>
      <SocialLinks />
  </NavbarWrapper>
)
 
Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}
export default Navbar