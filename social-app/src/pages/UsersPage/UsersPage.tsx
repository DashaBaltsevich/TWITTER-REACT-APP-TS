import React from 'react'
import { FriendsContainer, UsersContainer } from '../../components'
import styles from './UsersPage.module.scss'

export const UsersPage = () => {
  return (
    <section className={styles.s__users}>
      <FriendsContainer />
      <UsersContainer />
    </section>
  )
}
