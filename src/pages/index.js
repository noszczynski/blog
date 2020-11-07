import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import App from "../App"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <App />
    </Layout>
  )
}

export default IndexPage
