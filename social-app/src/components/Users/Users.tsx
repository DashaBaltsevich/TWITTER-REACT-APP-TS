import React from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '..'
import styles from './Users.module.scss'

export const Users = ({
  users,
  pageSize,
  totalUsersCount,
  currentPage,
  followUser,
  unFollowUser,
  setCurrentPage,
  apiRequest
}: {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  setCurrentPage: (currentPage: number) => void
  apiRequest: () => void
}) => {
  const handleFollowButton = (followed: boolean, id: number) => {
    if (followed) {
      unFollowUser(id)
    } else {
      followUser(id)
    }
  }

  const range = (from: number, to: number, step = 1): number[] => {
    let i = from
    const range = []

    while (i <= to) {
      range.push(i)
      i += step
    }

    return range
  }
  const pagesNumber = range(1, Math.ceil(totalUsersCount / pageSize))

  return (
    <div className={styles.b__users}>
      <div className={styles.b__users_title}>You might like</div>
      <ul>
        {pagesNumber.map((p: number, i) => {
          if (i > 9) {
            return ''
          } else {
            return (
              <li key={p}>
                <button
                  className={
                    p === currentPage ? styles.currentPage : styles.buttonPage
                  }
                  onClick={() => {
                    setCurrentPage(p)
                    apiRequest()
                  }}
                >
                  {p}
                </button>
              </li>
            )
          }
        })}
      </ul>
      {users && (
        <ul className={styles.l__users}>
          {users.map((user) => {
            return !user.followed ? (
              <li className={styles.l__users_item} key={user.id}>
                <UserPrevue user={user} />
                <button
                  onClick={() => handleFollowButton(user.followed, user.id)}
                >
                  {user.followed ? 'Unfollow' : 'Follow'}
                </button>
              </li>
            ) : null
          })}
        </ul>
      )}
    </div>
  )
}
