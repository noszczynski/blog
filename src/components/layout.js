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
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
