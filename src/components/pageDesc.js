import React from 'react'
import styled from 'styled-components'
import colors from './colors/colors'

const PageDescWrapper = styled.p`
  color: ${colors.black};
  font-family:'Questrial';
  width:max-content;
  margin: 0 auto;
  margin-bottom:1.5rem;
  text-align:center;

  @media screen AND (max-width:1024px){
    width:80vw;
  }
`

const PageDesc = ({children}) => (
  <PageDescWrapper>
    {children}
  </PageDescWrapper>
)

export default PageDesc;