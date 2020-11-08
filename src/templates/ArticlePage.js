import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import moment from "moment"

import Layout from "../components/layout"
import RichText from "../components/RichText"
import { formatDate } from "../utils/utils"
import colors from "../utils/colors"

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

const Author = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h6 {
    margin: 0;
  }

  img {
    display: block;
    height: 32px;
    width: 32px;
    border-radius: 100%;
    margin-right: 1rem;
  }
`

const HeaderCover = styled.div`
  width: 100%;
  height: 30vw;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const Header = styled.header`
  width: 100%;
  height: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
`

const HeaderAction = styled.div`
  width: 100px;

  a {
    text-decoration: none;
    color: ${colors.dark};
    font-weight: 500;
  }
`

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Content = styled.article`
  width: 80%;
  margin: 0 10%;
  padding: 2rem 4rem;
`

const Tags = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
`

const Tag = styled.h6`
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: bisque;
`

const ArticlePage = ({ pageContext: { data } }) => {
  moment.locale("pl")

  if (data) {
    const { title, author, coverImage, content, date, tags } = data

    return (
      <Layout>
        <Wrapper>
          <Header>
            <HeaderInner>
              <HeaderAction>
                <Link to={"/"}>← go back</Link>
              </HeaderAction>
              <Author>
                <img src={author.picture.url} alt={""} />
                <h6>{author.name}</h6>
              </Author>
              <HeaderAction />
            </HeaderInner>
            <h1>{title}</h1>
            <time dateTime={date}>{formatDate(date)}</time>
            <HeaderCover>
              <img src={coverImage.url} alt={""} />
            </HeaderCover>
          </Header>
          <Content>
            <Tags>
              {tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <RichText text={content.html} />
          </Content>
        </Wrapper>
      </Layout>
    )
  } else return <div>Loading...</div>
}

export default ArticlePage
