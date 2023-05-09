import React from 'react'
import { Friends, Users } from '../../components'
import styles from './UsersPage.module.scss'
import { UserType } from '../../types'

interface PropsType {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  onPageChanged: (page: number) => void
}

export const UsersPage = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  followUser,
  unFollowUser,
  onPageChanged
}: PropsType) => {
  return (
    <section className={styles.s__users}>
      <Friends
        users={users}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        followUser={followUser}
        unFollowUser={unFollowUser}
        onPageChanged={onPageChanged}
      />
      <Users
        users={users}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        followUser={followUser}
        unFollowUser={unFollowUser}
        onPageChanged={onPageChanged}
      />
    </section>
  )
}
