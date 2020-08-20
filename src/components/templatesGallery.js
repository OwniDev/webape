import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import TemplateCard from "./templateCardCSSGrid";
import '@brainhubeu/react-carousel/lib/style.css';
import styled from 'styled-components'
import colors from './colors/colors'

const StyledCarousel = styled(Carousel)`
  button{
    background-color: ${colors.turquoise};
    transition:0.5s;
    span{
      border-width: 1px 1px 0 0;
    }
    :hover:enabled{
      transition:0.5s;
      background-color: ${colors.black};
      span{
      border-width: 3px 3px 0 0;
    }
    }
  }
`

const TemplatesGallery = ()=>(
  <StyledCarousel 
  arrows 
  dots 
  centered
  breakpoints={{
    900:{
      dots:false,
      arrows:false,
    },
  }}
  >
    <TemplateCard
    title="Behemoth" 
    description={<p>Made with Fantasy RPGs I mind. <br/>
    Illustrate the depth of your fantasy universe with slow parallax and let the audience unveil its mystery with smooth scroll animations.</p>}
    demo="/"
    download="/"
    id="1"
    />
    <TemplateCard 
        title="Electric" 
        description={<p>Made with dynamic brands and FPS streamers in mind. <br />A cyberpunk template with sharp edges and fast transitions. Your world moves fast and so should your website.</p>}
        demo="/"
        download="/"
        id="2"
    />
  </StyledCarousel>
)

export default TemplatesGallery