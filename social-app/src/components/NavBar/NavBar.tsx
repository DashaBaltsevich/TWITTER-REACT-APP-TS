import React from 'react'
// import NavBarStyles from './NavBar.module.scss'
import { NavLinks } from '../index'

export const NavBar = ({
  isAuthorized,
  setIsLoginFormVisible,
  handleLogOut
}: {
  isAuthorized: boolean
  setIsLoginFormVisible: (isVisible: boolean) => void
  handleLogOut: () => void
}): JSX.Element => {
  return (
    <nav>
      <NavLinks
        isAuthorized={isAuthorized}
        setIsLoginFormVisible={setIsLoginFormVisible}
        handleLogOut={handleLogOut}
      />
    </nav>
  )
}
