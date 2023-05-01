import React from 'react'
import { UserType } from '../../types'
import styles from './UserPrevue.module.scss'

export const UserPrevue = ({ user }: { user: UserType }) => {
  return (
    <div className={styles.l__users_item_wrap}>
      <img src={user.photo} className={styles.l__users_item_img} alt="avatar" />
      <div>
        <div className={styles.l__users_item_title}>{user.name}</div>
        <div style={{ marginBottom: '10px' }}>{user.status}</div>
        {user.followed && (
          <>
            <div>
              {user.location.country} {user.location.city}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
