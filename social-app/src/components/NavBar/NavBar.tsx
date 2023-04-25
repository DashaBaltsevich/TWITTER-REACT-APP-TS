import React, { FC } from 'react'
// import NavBarStyles from './NavBar.module.scss'
import { NavLinks } from '../index'

export const NavBar: FC = (): JSX.Element => {
  return (
    <nav>
      <NavLinks />
    </nav>
  )
}
