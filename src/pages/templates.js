import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import PageTitle from '../components/pageTitle';
import TemplatesGallery from '../components/templatesGallery'
import ComingSoon from '../components/comingSoon'

const VerticalAlign = styled.div`
  width:100%;
  /* margin:20px auto; */
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  padding-bottom:50px;
`
const PastProjects = () => (
  <Layout>
    <SEO title="Templates gratuites" />
    {/* <ComingSoon/> */}
    <VerticalAlign>
      <PageTitle title="Templates gratuites"/>
      <TemplatesGallery/>
    </VerticalAlign>
  </Layout>
)

export default PastProjects
