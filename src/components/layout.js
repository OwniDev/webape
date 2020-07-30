/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Navbar from './navbar'
import "./layout.css"


const LayoutWrapper = styled.div`
  > *{
    display:inline-block;
  }
`;

const NavBarLayoutWrapper = styled.div`
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <NavBarLayoutWrapper>
        <Navbar siteTitle={data.site.siteMetadata.title}/>
      </NavBarLayoutWrapper>
        <main>{children}</main>
      <footer 
          style={{
            position:"absolute",
            bottom:'0px',
            right: '0px',
            margin:'10px',
            fontSize:'14px'
          }}
        >
         Auxane Nitharum © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
