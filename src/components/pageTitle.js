import React from 'react'
import styled from 'styled-components'
import colors from './colors/colors'

const PageTitleWrapper = styled.h2`
  color: ${colors.black};
  font-family:'Questrial';
  width:max-content;
  margin: 0 auto;
  margin-bottom:1.5rem;

  @media screen AND (max-width:1024px){
    width:80vw;
  }
`

const PageTitle = ({title}) => (
  <PageTitleWrapper>
    {title}
  </PageTitleWrapper>
)

export default PageTitle;