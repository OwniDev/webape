import React from 'react'
//import styled from 'styled-components'
import WAExternalButton from './buttonExternal'
import CardWrapper from "./cardWrapper"
import CardContainer from './cardContainer'


const ProjectCard = ({reverse, link, description, extra, img, title}) => (
  <CardWrapper reverse={reverse} elements="2">
    {img? img :<img src="https://via.placeholder.com/465x290" alt="Project"/>}
    <CardContainer>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="extra" style={{ 'color':'#BDBDBD'}}>{extra}</p>
      <WAExternalButton link={link}>Visiter</WAExternalButton>
    </CardContainer>
  </CardWrapper>
)

  
export default ProjectCard