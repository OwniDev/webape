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
const IndexPage = () => (
  <Layout>
    <IndexWrapper>
      <SEO title="Home" />
      <MonkeyWrapper/>
      <div style={{
        width:'600px',
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
         }}>
        <WAOrgBase />
      </div>
    </IndexWrapper>
  </Layout>
)

export default IndexPage