import React from "react"
import "../styles.scss"

export default function NavigationButtons({
  setItem,
  activeItem,
  itemsLength,
}) {
  const next = () => setItem("+1")
  const previous = () => setItem("-1")

  return (
    <div className={"articles__navigation"}>
      <button
        onClick={previous}
        className={
          "articles__navigation__button articles__navigation__button--previous translate-hover"
        }
      >
        prev
      </button>
      <div className={"articles__navigation__divider"}>
        <span style={{ transform: `scaleX(${activeItem / itemsLength})` }} />
      </div>
      <button
        onClick={next}
        className={
          "articles__navigation__button articles__navigation__button--next translate-hover"
        }
      >
        next
      </button>
    </div>
  )
}
