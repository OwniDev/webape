import React from 'react'
import styled from 'styled-components'

const CenteredWrapper = styled.div`
  width:80%;
  /* margin:20px auto; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:2;

  @media screen and (max-width: 1024px){
    margin: 0px auto 50px auto;
    padding-top:20px;
    width: 95%;
    min-height:100vh;
    position:static;
    transform: translate(0%, 0%);
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
  }
`
const Centered = ({children}) => (
  <CenteredWrapper>
    {children}
  </CenteredWrapper>
)

export default Centered