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
`


const Navbar = () => (
  <NavbarWrapper>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <WANegNoBase />
      <MenuLinks/>
      <SocialLinks />
    </div>

  </NavbarWrapper>
)
 
Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}
export default Navbar