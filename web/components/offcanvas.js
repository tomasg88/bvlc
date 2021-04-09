import React, { useState, useCallback } from "react"
import { slide as Menu } from "react-burger-menu"
import Navigation from "../components/navigation"

export default function Offcanvas() {
  const [openMenu, setOpenMenu] = useState(false)

  const closeMenu = useCallback(() => setOpenMenu(false), []);
  const handleStateChange = useCallback(state => {
    setOpenMenu(state.isOpen);
  }, [openMenu, setOpenMenu])

  return (
    <Menu
      width={240}
      right
      isOpen={openMenu}
      onStateChange={handleStateChange}
    >
      <Navigation closeMenu={closeMenu} />
    </Menu>
  )
}