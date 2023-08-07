import React, { useEffect, useRef } from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '..'
import styles from './Users.module.scss'

interface UsersPropsType {
  users: UserType[]
  handleFollowButton: (id: number) => void
  showMoreNotFriends: () => void
}

export const Users = ({
  users,
  handleFollowButton,
  showMoreNotFriends
}: UsersPropsType) => {
  const userList = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (userList.current) {
      const scrollHeight =
        userList.current.scrollHeight - userList.current.scrollTop
      userList.current.scrollTop = scrollHeight
    }
  }, [users])
  return (
    <div className={styles.b__users}>
      <div className={styles.b__users_title}>You might like</div>

      {users.length && (
        <ul className={styles.l__users} ref={userList}>
          {users.map((user) => (
            <li className={styles.l__users_item} key={user.id}>
              <UserPrevue user={user} />
              <button
                className={styles.l__users_item_button}
                onClick={() => {
                  handleFollowButton(user.id)
                }}
              >
                Follow
              </button>
            </li>
          ))}
          <button
            className={styles.b__users_button}
            onClick={() => {
              showMoreNotFriends()
            }}
          >
            Show More
          </button>
        </ul>
      )}
    </div>
  )
}
