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
  handleFollowButton: (id: number, followed: boolean) => void
  onPageChanged: () => void
  isAuthorized: boolean
}

export const UsersPage = ({
  friends,
  notFriends,
  isLoading,
  handleFollowButton,
  onPageChanged,
  isAuthorized
}: PropsType) => {
  return (
    <section className={styles.s__users}>
      <Friends
        friends={friends}
        isLoading={isLoading}
        handleFollowButton={handleFollowButton}
        onPageChanged={onPageChanged}
        isAuthorized={isAuthorized}
      />
      <Users
        notFriends={notFriends}
        isLoading={isLoading}
        handleFollowButton={handleFollowButton}
        onPageChanged={onPageChanged}
        isAuthorized={isAuthorized}
      />
    </section>
  )
}
