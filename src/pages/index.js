import React from "react"

import Layout from "../components/layout"
import WAOrgBase from "../components/images/WAOrgBase"
import SEO from "../components/seo"

import MonkeyWrapper from '../components/threeMonkeySpin'
import styled from 'styled-components'

  const IndexWrapper = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    canvas{
      width: 100%;
      height: 100%;
      display:block;
    }
  `
  const ImageWrapper = styled.div`
        width: 60vw;
        min-width:300px;
        max-width:600px;
        margin: 0;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);

        /* @media screen AND (max-width:1024px){
          position:fixed;
          bottom:0;
          z-index:99;
        } */
  `

const IndexPage = () => (
  <Layout>
    <IndexWrapper>
      <SEO title="Home" />
      <MonkeyWrapper/>
      <ImageWrapper>
        <WAOrgBase />
      </ImageWrapper>
    </IndexWrapper>
  </Layout>
)

export default IndexPage