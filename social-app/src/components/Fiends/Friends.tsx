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
  pageSize: number
  totalUsersCount: number
  currentPage: number
  handleUnfollowButton: (id: number) => void
  handlePagination: (pageNumber: number) => void
}

export class Friends extends React.Component<FriendsPropsType> {
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

  render(): React.ReactNode {
    return (
      <div className={styles.b__friends}>
        <div className={styles.b__friends_title}>Friends</div>
        <ul className={styles.l__pages}>
          {this.pagesNumber.map((p: number, i) => {
            if (i > 9) {
              return ''
            } else {
              return (
                <li key={p}>
                  <button
                    className={
                      p === this.props.currentPage
                        ? `${styles.l__pages_item} ${styles.l__pages_item_current}`
                        : styles.l__pages_item
                    }
                    onClick={() => 
                      this.props.handlePagination(p)
                    }
                  >
                    {p}
                  </button>
                </li>
              )
            }
          })}
        </ul>
        {this.props.friends.users && (
          <ul className={styles.l__users}>
            {this.props.friends.users.map((user) => (
              <li className={styles.l__users_item} key={user.id}>
                <UserPrevue user={user} />
                <button
                  onClick={() => this.props.handleUnfollowButton(user.id)}
                >
                  Unfollow
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
