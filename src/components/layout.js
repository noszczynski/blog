import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../utils/globalStyle"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
