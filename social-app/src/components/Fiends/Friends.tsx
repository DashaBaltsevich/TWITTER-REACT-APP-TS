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
  isLoading: boolean
  handleFollowButton: (id: number, followed: boolean) => void
  onPageChanged: (page: number) => void
  isAuthorized: boolean
}

export class Friends extends React.Component<FriendsPropsType> {
  // handleFollowButton = (id: number) => {
  //   this.props.unFollowUserThunkCreator(id)
  // }
  render(): React.ReactNode {
    return (
      <div className={styles.b__friends}>
        <div className={styles.b__friends_title}>Friends</div>
        {this.props.friends.users && (
          <ul className={styles.l__users}>
            {this.props.friends.users.map((user) => (
              <li className={styles.l__users_item} key={user.id}>
                <UserPrevue user={user} />
                <button
                  onClick={() =>
                    this.props.handleFollowButton(user.id, user.followed)
                  }
                >
                  {user.followed ? 'Unfollow' : 'Follow'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
