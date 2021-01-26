
import React from 'react'
import CardWrapper from './cardWrapper';
import CardContainer from './cardContainer';
import styled from 'styled-components';

import Tools from './tools';

const ToolsWrapper = styled.div`
  display:flex; 
  flex-direction:row; 
  flex-wrap:wrap; 
  max-width:400px; 
  width:100vw; 
  justify-content:space-between; 
  align-items:space-between;
  margin:10px auto;
  height:150px;
@media screen and (max-width:1000px){
    width:100%;
  }
`
const AboutText = () => (
  <CardWrapper>
    <CardContainer >
        <h3>
          Bienvenue sur WebApe !
        </h3>
      <p>
        Afin de vous aider au mieux dans vos projets, je vous propose tout un catalogue de compétences :</p>
          <ul>
            <li>design</li>
            <li>développement web front et back</li>
            <li>et des connaissances marketing</li>
          </ul>
        <h3>
        Nos outils:
        </h3>
        <ToolsWrapper>
          <Tools />
        </ToolsWrapper>
      <p>
        Modèle 3D : <a href="https://sabrinaooi.wixsite.com/portfolio" target="_blank" rel="noreferrer">Sabrina Ooi</a>
      </p>
    </CardContainer>
  </CardWrapper>
)

export default AboutText;

