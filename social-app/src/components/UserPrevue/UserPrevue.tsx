import React from 'react'
import { UserType } from '../../types'
import styles from './UserPrevue.module.scss'
import { NavLink } from 'react-router-dom'

export const UserPrevue = ({ user }: { user: UserType }) => {
  return (
    <div className={styles.l__users_item_wrap}>
      <NavLink to={'/profile/' + user.id}>
        <img
          src={
            user.photos.small !== null
              ? user.photos.small
              : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
          }
          className={styles.l__users_item_img}
          alt="avatar"
        />
      </NavLink>

      <div>
        <div className={styles.l__users_item_title}>{user.name}</div>
        <span>{user.uniqueUrlName}</span>
        <div style={{ marginBottom: '10px' }}>
          {user.status ? user.status : 'no status'}
        </div>
      </div>
    </div>
  )
}
