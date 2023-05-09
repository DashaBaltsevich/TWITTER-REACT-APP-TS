import React from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '../../components'
import styles from './Friends.module.scss'

interface FriendsPropsType {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  onPageChanged: (page: number) => void
}

export class Friends extends React.Component<FriendsPropsType> {
  handleFollowButton = (followed: boolean, id: number) => {
    if (followed) {
      this.props.unFollowUser(id)
    } else {
      this.props.followUser(id)
    }
  }
  render(): React.ReactNode {
    return (
      <div className={styles.b__friends}>
        <div className={styles.b__friends_title}>Friends</div>
        {this.props.users && (
          <ul className={styles.l__users}>
            {this.props.users.map((user) => {
              return user.followed ? (
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
