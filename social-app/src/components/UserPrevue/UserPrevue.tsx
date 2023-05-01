import React from 'react'
import { UserType } from '../../types'
import styles from './UserPrevue.module.scss'

interface PropsType {
  user: UserType
}

export class UserPrevue extends React.Component<PropsType> {
  render(): React.ReactNode {
    return (
      <div className={styles.l__users_item_wrap}>
        <img
          src={
            this.props.user.photos.small !== null
              ? this.props.user.photos.small
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
          }
          className={styles.l__users_item_img}
          alt="avatar"
        />

        <div>
          <div className={styles.l__users_item_title}>
            {this.props.user.name}
          </div>
          <span>{this.props.user.uniqueUrlName}</span>
          <div style={{ marginBottom: '10px' }}>
            {this.props.user.status ? this.props.user.status : 'status'}
          </div>
        </div>
      </div>
    )
  }
}
