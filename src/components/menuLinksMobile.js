import React, { useState } from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby';
import { bubble as Menu } from 'react-burger-menu'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
// import Icon from './icon';
import colors from './colors/colors'

const MenuLinksMobileWrapper = styled(Menu)`

  *{
    color:white;
    font-family:'Questrial';
    font-size:0.9rem;
    text-decoration:none;
    /* text-align:center; */
    margin:0px;
  }
  .bm-morph-shape svg{
    fill:${colors.turquoise};
  }
  .bm-cross{
    background:white;
  }
  .links{
    text-align:center;
  }
  .active_link {
    svg{
    fill:${colors.black};
    }
    p{
    color:${colors.black};
    }
  }
  @media screen AND (min-width: 700px){
      display:none;
  }  
`
const MenuLinksMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <MenuLinksMobileWrapper  isOpen={isOpen} menuClicked={()=>{setIsOpen(!isOpen)}} right>
        <Link 
        className="links"
        to="/" 
        activeClassName="active_link">
          <HomeRoundedIcon alt="Home Icon" title="Accueil"/>
         <p>Accueil</p>
        </Link>
        <Link
        className="links" to="/past-projects" 
        activeClassName="active_link">
          <WorkRoundedIcon alt="Work Icon" title="Projets"/>
          <p>Projets</p>
        </Link>
    
        <Link
        className="links" 
        to="/prices"
        activeClassName="active_link">
          <LocalOfferRoundedIcon alt="Prices Icon" title="Tarifs"/>
          <p>Tarifs</p>
        </Link>
    
        <Link
        className="links" 
        to="/templates"
        disabled
        activeClassName="active_link">
          <DescriptionRoundedIcon alt="Templates Icon" title="Templates"/>
          <p>Templates</p>
        </Link>
    
        <Link
        className="links" 
        to="/contact"
        activeClassName="active_link">
        <SendRoundedIcon alt="Contact Icon" title="Contact"/>
        <p>Contact</p>
        </Link>
    
        <Link
        className="links" 
        to="/about"
        activeClassName="active_link">
          <InfoRoundedIcon alt="About Icon" title="A propos"/>
           <p>A propos</p>
        </Link>
    </MenuLinksMobileWrapper>
  )
}

export default MenuLinksMobile;