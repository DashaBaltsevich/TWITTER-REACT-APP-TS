import React from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '../../components'
import styles from './Friends.module.scss'

interface FriendsPropsType {
  friends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  handleUnfollowButton: (id: number) => void
  handlePagination: (pageNumber: number) => void
}

export const Friends = ({
  friends,
  handleUnfollowButton,
  handlePagination
}: FriendsPropsType) => {
  const range = (from: number, to: number, step = 1): number[] => {
    let i = from
    const range = []

    while (i <= to) {
      range.push(i)
      i += step
    }

    return range
  }
  const pagesNumber = range(
    1,
    Math.ceil(friends.totalUsersCount / friends.pageSize)
  )

  return (
    <div className={styles.b__friends}>
      <div className={styles.b__friends_title}>Friends</div>
      <ul className={styles.l__pages}>
        {pagesNumber.map((p: number, i) => {
          if (i > 9) {
            return ''
          } else {
            return (
              <li key={p}>
                <button
                  className={
                    p === friends.currentPage
                      ? `${styles.l__pages_item} ${styles.l__pages_item_current}`
                      : styles.l__pages_item
                  }
                  onClick={() => handlePagination(p)}
                >
                  {p}
                </button>
              </li>
            )
          }
        })}
      </ul>
      {friends.users && (
        <ul className={styles.l__users}>
          {friends.users.map((user) => (
            <li className={styles.l__users_item} key={user.id}>
              <UserPrevue user={user} />
              <button onClick={() => handleUnfollowButton(user.id)}>
                Unfollow
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
