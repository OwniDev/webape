import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page non existante" />
    <h1>Cette page n'existe pas (encore ?)</h1>
    <p>Si vous avez besoin d'informations, n'hésitez pas a m'envoyer un e-mail : auxane@webape.dev </p>
  </Layout>
)

export default NotFoundPage
