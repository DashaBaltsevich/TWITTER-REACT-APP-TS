import React from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '..'
import styles from './Users.module.scss'

export const Users = ({
  users,
  followUser,
  unFollowUser
}: {
  users: UserType[]
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
}) => {
  const handleFollowButton = (followed: boolean, id: number) => {
    if (followed) {
      unFollowUser(id)
    } else {
      followUser(id)
    }
  }
  return (
    <div className={styles.b__users}>
      <div className={styles.b__users_title}>You might like</div>
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
