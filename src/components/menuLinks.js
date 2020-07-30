import React from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby';
import colors from './colors/colors'

const MenuLinksWrapper = styled.div`
  *{
    display:block;
    color:white;
    font-family:'Questrial';
    font-size:20px;
    text-decoration:none;
    text-align:center;
    margin:20px;
  }

  .active_link::after{
    content:'';
    min-height:20px;
    min-width:20px;
    background-color:${colors.turquoise};
    position:absolute;
    right:0px;
  }

  @media screen AND (max-width: 1024px){
    *{
      z-index:0;
    }
    > * {
      display:inline;
      font-size:0.9rem; 
      position:relative;
      z-index:1;
    }
    .active_link::after {
      min-width:100%;
      z-index:-1;
      min-height:5px;
      bottom:-10px;
    }
  }
  
  @media screen AND (max-width: 700px){
      display:none;
  }  
`
const MenuLinks = () => (
  <MenuLinksWrapper>
    <Link 
    to="/" 
    activeClassName="active_link">Accueil</Link>

    <Link to="/past-projects" 
    activeClassName="active_link">Projets</Link>

    <Link 
    to="/prices"
    activeClassName="active_link">Tarifs</Link>

    <Link 
    to="/templates"
    disabled
    activeClassName="active_link">Templates</Link>

    <Link 
    to="/contact"
    activeClassName="active_link">Contact</Link>

    <Link 
    to="/about"
    activeClassName="active_link">A propos</Link>

  </MenuLinksWrapper>
)

export default MenuLinks;