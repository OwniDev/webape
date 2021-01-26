import React from "react"
import {graphql} from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

import Centered from '../components/centered'
import PageTitle from '../components/pageTitle';
import ProjectCard from '../components/projectCard';

const PastProjects = ({data}) => {
   const getCards = () => {
      let cards = [];
      data.allPrismicProjectCard.edges.forEach((project, index) => {
         if (index % 2 === 0){
            cards.push(<ProjectCard
               img={project.node.data.website_image.url}
               link={project.node.data.link_to_website.url}
               title={project.node.data.website_name.text}
               description={project.node.data.website_description.text}
               extra={project.node.data.roles.text} 
               reverse
               />)
         } else {
            cards.push(<ProjectCard
               img={project.node.data.website_image.url}
               link={project.node.data.link_to_website.url}
               title={project.node.data.website_name.text}
               description={project.node.data.website_description.text}
               extra={project.node.data.roles.text} 
               />)
         }
      })
      return cards;
   }
   return(
  <Layout>
     <SEO title="Projects" />
     <Centered>
        <PageTitle title="Projets en cours" />
        {
           getCards()
         }

     </Centered>
  </Layout>
   )
}
export const query = graphql`
query GetCards {
   allPrismicProjectCard(sort: {fields: last_publication_date}) {
     edges {
       node {
         id
         data {
           website_description {
             text
           }
           website_image {
             alt
             url
           }
           website_name {
             text
           }
           link_to_website {
             url
           }
           roles {
             text
           }
         }
       }
     }
   }
 }

  `

export default PastProjects
