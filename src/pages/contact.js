import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Centered from '../components/centered'
import PageTitle from '../components/pageTitle';

import ContactText from '../components/contactText'
// import ContactFromContainer from '../components/contactFormContainer'

const PastProjects = () => (
  <Layout>
    <SEO title="Contact" />
    <Centered>
      <PageTitle title="Contact"/>
      <ContactText />
      {/* <ContactFromContainer /> */}
    </Centered>
  </Layout>
)

export default PastProjects
