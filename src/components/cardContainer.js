import React from 'react'
import styled from 'styled-components'

const CardContainerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

const CardContainer = ({children}) => (
  <CardContainerWrapper>
    {children}
  </CardContainerWrapper>
)

export default CardContainer