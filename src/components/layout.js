import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../utils/globalStyle"
import SEO from "./seo"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <SEO title={"title"} />
      <GlobalStyles />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
