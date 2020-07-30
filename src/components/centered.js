import React from 'react'
import styled from 'styled-components'

const CenteredWrapper = styled.div`
  width:80%;
  margin:20px auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:2;
`
const Centered = ({children}) => (
  <CenteredWrapper>
    {children}
  </CenteredWrapper>
)

export default Centered