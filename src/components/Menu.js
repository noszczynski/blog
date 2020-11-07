import React from "react"
import MenuItem from "./MenuItem"
import { MENU_ITEMS } from "../utils/constants"

const Menu = () => {
  return (
    <div className={"menu"}>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.label} item={item} />
      ))}
    </div>
  )
}

export default Menu
