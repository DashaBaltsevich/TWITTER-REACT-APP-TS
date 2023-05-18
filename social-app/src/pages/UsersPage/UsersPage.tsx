import React from 'react'
import { Friends, Users } from '../../components'
import styles from './UsersPage.module.scss'
import { UserType } from '../../types'

interface PropsType {
  notFriends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  friends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  isLoading: boolean
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  onPageChanged: () => void
  isAuthorized: boolean
}

export const UsersPage = ({
  friends,
  notFriends,
  isLoading,
  followUser,
  unFollowUser,
  onPageChanged,
  isAuthorized
}: PropsType) => {
  return (
    <section className={styles.s__users}>
      <Friends
        friends={friends}
        isLoading={isLoading}
        followUser={followUser}
        unFollowUser={unFollowUser}
        onPageChanged={onPageChanged}
        isAuthorized={isAuthorized}
      />
      <Users
        notFriends={notFriends}
        isLoading={isLoading}
        followUser={followUser}
        unFollowUser={unFollowUser}
        onPageChanged={onPageChanged}
        isAuthorized={isAuthorized}
      />
    </section>
  )
}
