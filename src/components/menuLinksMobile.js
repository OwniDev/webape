import React from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby';

import Icon from './icon';
// import colors from './colors/colors'

const MenuLinksMobileWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-around;
  width:100%;
  *{
    display:inline;
    color:white;
    font-family:'Questrial';
    font-size:0.9rem;
    text-decoration:none;
    /* text-align:center; */
    margin:0px;
  }

  /* .active_link::after{
  } */
  
  @media screen AND (min-width: 701px){
      display:none;
  }  
`
const MenuLinksMobile = () => (
  <MenuLinksMobileWrapper>

    <Link 
    to="/" 
    activeClassName="active_link">
      <Icon src="../banana.svg" alt="Home Icon" title="Accueil"/>
    </Link>

    <Link to="/past-projects" 
    activeClassName="active_link">
      <Icon src="../banana.svg" alt="Home Icon" title="Projets"/>
    </Link>

    <Link 
    to="/prices"
    activeClassName="active_link">
      <Icon src="../banana.svg" alt="Home Icon" title="Tarifs"/>
    </Link>

    <Link 
    to="/templates"
    disabled
    activeClassName="active_link">
      <Icon src="../banana.svg" alt="Home Icon" title="Templates"/>
    </Link>

    <Link 
    to="/contact"
    activeClassName="active_link">
      <Icon src="../banana.svg" alt="Home Icon" title="Contact"/>
    </Link>

    <Link 
    to="/about"
    activeClassName="active_link">
      <Icon src="../banana.svg" alt="Home Icon" title="A propos"/>
    </Link>

  </MenuLinksMobileWrapper>
)

export default MenuLinksMobile;