import React from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '..'
import styles from './Users.module.scss'
import { followUser, unFollowUser } from '../../redux/action-creator'

interface UsersPropsType {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  setCurrentPage: (currentPage: number) => void
  apiRequest: (currentPage: number) => void
}

export class Users extends React.Component<UsersPropsType> {
  handleFollowButton = (followed: boolean, id: number) => {
    if (followed) {
      unFollowUser(id)
    } else {
      followUser(id)
    }
  }

  range = (from: number, to: number, step = 1): number[] => {
    let i = from
    const range = []

    while (i <= to) {
      range.push(i)
      i += step
    }

    return range
  }
  pagesNumber = this.range(
    1,
    Math.ceil(this.props.totalUsersCount / this.props.pageSize)
  )
  render() {
    return (
      <div className={styles.b__users}>
        <div className={styles.b__users_title}>You might like</div>
        <ul>
          {this.pagesNumber.map((p: number, i) => {
            if (i > 9) {
              return ''
            } else {
              return (
                <li key={p}>
                  <button
                    className={
                      p === this.props.currentPage
                        ? styles.currentPage
                        : styles.buttonPage
                    }
                    onClick={() => {
                      this.props.setCurrentPage(p)
                      this.props.apiRequest(p)
                    }}
                  >
                    {p}
                  </button>
                </li>
              )
            }
          })}
        </ul>
        {this.props.users && (
          <ul className={styles.l__users}>
            {this.props.users.map((user) => {
              return !user.followed ? (
                <li className={styles.l__users_item} key={user.id}>
                  <UserPrevue user={user} />
                  <button
                    onClick={() =>
                      this.handleFollowButton(user.followed, user.id)
                    }
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
}
