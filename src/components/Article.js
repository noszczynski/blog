import React from "react"

const Article = ({ article }) => {
  const { title, id, author, cover } = article

  return (
    <article className={"article__item"}>
      <div className={"article__item__cover__wrapper"}>
        <img
          className={"article__item__cover"}
          src={cover}
          alt={"article cover"}
        />
      </div>
      <section className={"article__item__wrapper"}>
        <h3 className={"article__subtitle subtitle"}>Story 0{id}</h3>
        <h2 className={"article__title"}>{title}</h2>
        <h5 className={"article__author"}>{author}</h5>
        <a className={"article__link"} href={"/"}>
          read more
        </a>
      </section>
    </article>
  )
}

export default Article
