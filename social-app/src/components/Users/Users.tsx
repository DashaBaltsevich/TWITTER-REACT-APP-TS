import React from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '..'
import styles from './Users.module.scss'
import { userAPI } from '../../api/api'

interface UsersPropsType {
  notFriends: {
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

export class Users extends React.Component<UsersPropsType> {
  handleFollowButton = (id: number) => {
    userAPI.followUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        this.props.followUser(id)
      }
    })
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
  // pagesNumber = this.range(
  //   1,
  //   Math.ceil(this.props.totalUsersCount / this.props.pageSize)
  // )
  render() {
    return (
      <div className={styles.b__users}>
        <div className={styles.b__users_title}>You might like</div>
        {/* <ul className={styles.l__pages}>
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
                      this.props.onPageChanged(p)
                    }}
                  >
                    {p}
                  </button>
                </li>
              )
            }
          })}
        </ul> */}
        {this.props.notFriends.users.length && (
          <ul className={styles.l__users}>
            {this.props.notFriends.users.map((user) => (
              <li className={styles.l__users_item} key={user.id}>
                <UserPrevue user={user} />
                <button
                  onClick={() => {
                    this.handleFollowButton(user.id)
                  }}
                >
                  {user.followed ? 'Unfollow' : 'Follow'}
                </button>
              </li>
            ))}
            <button
              onClick={() => {
                this.props.onPageChanged()
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
