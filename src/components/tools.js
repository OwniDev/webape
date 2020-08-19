import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Tools = () => {
const allFile = useStaticQuery(
  graphql`
    query {
      mainImages: allFile(
        sort:{fields: name, order:ASC }
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "tools" }
        }
        
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
   `
)
const getTitle = (title) => {
  let cleanTitle = title.substring(2);
  return cleanTitle;
}

  return(
    allFile.mainImages.edges.map((image, index) => (
      <Img
      style={{width:'50px', height:'50px', marginRight:'20px'}}
      imgStyle={{maxWidth:'50px', width:'auto', maxHeight:'50px', height:'auto', margin:'auto'}}
      key={index}
      fluid={image.node.childImageSharp.fluid}
      alt={getTitle(image.node.name)}
      title={getTitle(image.node.name)}
      />
  ))
  )

}
export default Tools;