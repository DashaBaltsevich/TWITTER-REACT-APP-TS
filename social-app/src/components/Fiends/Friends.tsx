import React from 'react'
import { UserType } from '../../types'
import { UserPrevue } from '../../components'
import styles from './Friends.module.scss'
import axios from 'axios'
import { URL } from '../../App'

interface FriendsPropsType {
  friends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  isLoading: boolean
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  onPageChanged: (page: number) => void
  isAuthorized: boolean
}

export class Friends extends React.Component<FriendsPropsType> {
  handleFollowButton = (followed: boolean, id: number) => {
    if (followed) {
      this.props.unFollowUser(id)
      axios.delete(`${URL}/follow/${id}`, {
        withCredentials: this.props.isAuthorized,
        headers: {
          'API-KEY': 'ea0a0a88-cf87-4ee4-a023-a4ef1f41395f'
        }
      })
    } else {
      this.props.followUser(id)
    }
  }
  componentDidMount(): void {
    console.log(this.props.friends)
  }
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
                    this.handleFollowButton(user.followed, user.id)
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
