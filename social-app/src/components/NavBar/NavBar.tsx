import React, { FC } from 'react'
// import NavBarStyles from './NavBar.module.scss'
import { NavLinks } from '../NavLinks'

export const NavBar: FC = (): JSX.Element => {
  return (
    <nav>
      <NavLinks />
    </nav>
  )
}
