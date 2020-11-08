import React from "react"
import styled from "styled-components"

const Wrapper = styled.div``

const RichText = ({ text, children }) => {
  return (
    <Wrapper dangerouslySetInnerHTML={{ __html: text }}>{children}</Wrapper>
  )
}

export default RichText
