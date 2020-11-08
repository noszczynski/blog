import React from "react"

import Layout from "../components/layout"
import RichText from "../components/RichText"

const ArticlePage = ({ pageContext: { data } }) => {
  if (data) {
    const { title, author, coverImage, content, date, tags } = data

    return (
      <Layout>
        <div>
          <h1>{title}</h1>
          <h4>{author.name}</h4>
          <img src={author.picture.url} alt={""} />
          <img src={coverImage.url} alt={""} />
          <p>
            {tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </p>
          <time dateTime={date}>{date}</time>
          <RichText text={content.html} />
        </div>
      </Layout>
    )
  } else return <div>Loading...</div>
}

export default ArticlePage
