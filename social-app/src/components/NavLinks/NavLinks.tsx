import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Messages from '../../assets/messages.svg'
import Profile from '../../assets/profile.svg'
import './NavLinks.scss'

export const NavLinks: FC = (): JSX.Element => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive ? 'l-nav__link-active l-nav__link' : 'l-nav__link'

  return (
    <ul className="l-nav">
      <li className="l-nav__item">
        <NavLink to="/" className={setActive}>
          <img src={Logo} alt="logo" />
        </NavLink>
      </li>
      <li className="l-nav__item">
        <NavLink to="/profile" className={setActive}>
          <img src={Profile} alt="profile" />
          Profile
        </NavLink>
      </li>
      <li className="l-nav__item">
        <NavLink to="/dialog" className={setActive}>
          <img src={Messages} alt="messages" />
          Messages
        </NavLink>
      </li>
      <li className="l-nav__item">
        <NavLink to="/users" className={setActive}>
          <img src={Messages} alt="users" />
          Friends
        </NavLink>
      </li>
    </ul>
  )
}
