import React from "react"
import { Link } from "gatsby"

const Article = ({ article, position, index }) => {
  const {
    title,
    author: { name: authorName },
    coverImage: { url: coverImageUrl },
    slug,
  } = article

  return (
    <article className={"article__item"}>
      <div className="article__item__inner">
        {position && (
          <div
            className={"article__item__cover__wrapper"}
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
            }}
          >
            <img
              className={"article__item__cover"}
              src={coverImageUrl}
              alt={"article cover"}
            />
          </div>
        )}
        <section className={"article__item__wrapper"}>
          <h3 className={"article__subtitle subtitle"}>Story 0{index + 1}</h3>
          <h2 className={"article__title"}>{title}</h2>
          <h5 className={"article__author"}>{authorName}</h5>
          <Link className={"article__link"} to={`/${slug}`}>
            read more
          </Link>
        </section>
      </div>
    </article>
  )
}

export default Article
