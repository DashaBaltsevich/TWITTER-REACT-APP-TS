import React from 'react'
// import NavBarStyles from './NavBar.module.scss'
import { NavLinks } from '../index'

export const NavBar = ({
  isAuthorized
}: {
  isAuthorized: boolean
}): JSX.Element => {
  return (
    <nav>
      <NavLinks isAuthorized={isAuthorized} />
    </nav>
  )
}
