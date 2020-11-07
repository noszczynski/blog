import React, { useEffect, useRef, useState } from "react"
import Article from "./Article"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { round } from "../utils/utils"

gsap.registerPlugin(ScrollTrigger)

const ArticleList = ({ calculatedProgress, setActive, list }) => {
  const wrapper = useRef(null)
  const [timeline, setTimeline] = useState(null)

  const handleSetActive = progress => {
    const matchItem = calculatedProgress.find(item => item.value === progress)

    if (matchItem) {
      setActive(matchItem.label)
    }
  }

  const getTimeline = () => {
    const parent = wrapper.current
    const children = parent.children

    return gsap.to(children, {
      xPercent: -100 * (children.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: parent,
        pin: true,
        scrub: 1,
        snap: 1 / (children.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + parent.offsetWidth,
        onUpdate: self => {
          handleSetActive(round(self.progress))
        },
      },
    })
  }

  useEffect(() => {
    setTimeline(getTimeline())

    return () => {
      timeline.clear()
      setTimeline(timeline)
    }
  }, [])

  return (
    <div className={"acticle__wrapper"} ref={wrapper}>
      {list.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
