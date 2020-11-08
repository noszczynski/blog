import React from "react"
import Img from "gatsby-image"

const Image = ({ src, ...props }) => {
  return src ? <Img fluid={data} {...props} /> : <div>Picture not found</div>
}

export default Image
