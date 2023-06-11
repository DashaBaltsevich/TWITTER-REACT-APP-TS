import React from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '..'
import styles from './Users.module.scss'

interface UsersPropsType {
  users: UserType[]
  pageSize: number
  handleFollowButton: (id: number) => void
  handlePagination: () => void
}

export class Users extends React.Component<UsersPropsType> {
  render() {
    return (
      <div className={styles.b__users}>
        <div className={styles.b__users_title}>You might like</div>

        {this.props.users.length && (
          <ul className={styles.l__users}>
            {this.props.users.map((user) => (
              <li className={styles.l__users_item} key={user.id}>
                <UserPrevue user={user} />
                <button
                  className={styles.l__users_item_button}
                  onClick={() => {
                    this.props.handleFollowButton(user.id)
                  }}
                >
                  Follow
                </button>
              </li>
            ))}
            <button
              className={styles.b__users_button}
              onClick={() => {
                this.props.handlePagination()
              }}
            >
              Show More
            </button>
          </ul>
        )}
      </div>
    )
  }
}
