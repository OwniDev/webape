import React from 'react'
//import styled from 'styled-components'
import WAExternalButton from './buttonExternal'
import CardWrapper from "./cardWrapper"
import CardContainer from './cardContainer'


const ProjectCard = ({reverse, link, description, extra, img, title, alt}) => (
  <CardWrapper reverse={reverse} elements="2">
    <img src={img} alt={alt}/>
    <CardContainer>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="extra" style={{ 'color':'#BDBDBD'}}>{extra}</p>
      <WAExternalButton link={link}>Visiter</WAExternalButton>
    </CardContainer>
  </CardWrapper>
)

  
export default ProjectCard