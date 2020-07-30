import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Centered from '../components/centered'
import PageTitle from '../components/pageTitle';

import AboutText from '../components/aboutText'

const PastProjects = () => (
  <Layout>
    <SEO title="A propos" />
    <Centered>
      <PageTitle title="A propos"/>
      <AboutText />
    </Centered>
  </Layout>
)

export default PastProjects
