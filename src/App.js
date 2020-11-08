import React, { useState, useEffect } from "react"

import Menu from "./components/Menu"
import Counter from "./components/Counter"
import ArticleList from "./components/ArticleList"
import NavigationButtons from "./components/NavigationButtons"

import { round } from "./utils/utils"

import { graphql, useStaticQuery } from "gatsby"
import { cloneDeep } from "lodash"

const pageQuery = graphql`
  {
    gcms {
      posts {
        id
        date
        slug
        stage
        tags
        title
        author {
          name
          picture {
            url
          }
        }
        updatedAt
        content {
          html
          text
        }
        coverImage {
          url
        }
      }
    }
  }
`

const App = () => {
  const {
    gcms: { posts },
  } = useStaticQuery(pageQuery)

  const [activeItem, setActiveItem] = useState(1)
  const [progressArray, setProgressArray] = useState(null)

  const getNewItem = n => {
    switch (typeof n) {
      case "string": {
        if (n === "+1") {
          return activeItem !== posts.length ? activeItem + 1 : activeItem
        } else if (n === "-1") {
          return activeItem !== 1 ? activeItem - 1 : activeItem
        } else return activeItem
      }
      case "number": {
        return n
      }
      default: {
        return activeItem
      }
    }
  }

  const setItem = n => {
    const item = getNewItem(n)
    console.log(item)
    setActiveItem(item)
  }

  const init = () => {
    const arr = cloneDeep([...posts])
    const length = arr.length

    if (arr && length) {
      const progress = arr.reduce((acc, post, index) => {
        acc.push({ label: index + 1, value: round(index / (length - 1)) })
        return acc
      }, [])

      setProgressArray(progress)
    }
  }

  useEffect(init, [])

  return (
    <main className="container">
      <Menu />
      {progressArray && progressArray.length > 0 ? (
        <>
          <ArticleList
            list={posts}
            setActive={setActiveItem}
            calculatedProgress={progressArray}
          />
          {console.log(progressArray)}
          <Counter
            list={posts}
            progressArray={progressArray}
            activeItem={activeItem}
          />
        </>
      ) : null}
      <NavigationButtons
        setItem={setItem}
        activeItem={activeItem}
        itemsLength={posts.length}
      />
    </main>
  )
}

export default App
