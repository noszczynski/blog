import React from "react"

const MenuItem = ({ item }) => {
  const { link, label } = item

  return (
    <a
      href={link}
      aria-label="menu link"
      className={"menu__item translate-hover"}
    >
      {label}
    </a>
  )
}

export default MenuItem
