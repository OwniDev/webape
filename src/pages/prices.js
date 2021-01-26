import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Centered from "../components/centered";
import PriceCards from '../components/priceCards'
import PageTitle from '../components/pageTitle'
import PageDesc from '../components/pageDesc'

import styled from 'styled-components'
import colors from '../components/colors/colors'


const ContactLink = styled(Link)`
color: ${colors.turquoise};
transition:0.5s;

  :hover, :visited{
    color: ${colors.grey};
    transition:0.5s;
  }
`

const PastProjects = () => (
  <Layout>
    <SEO title="Tarifs" />
    <Centered>
      <PageTitle title="Tarifs"/>
       <PageDesc>
        Retrouvez ici les prix de bases de nos prestations. <br/>
        Le prix d'un site statique dépend du nombre de pages, <ContactLink to="/contact">contactez nous</ContactLink> pour un devis !
        </PageDesc>
      <PriceCards />
    </Centered>
  </Layout>
)

export default PastProjects
