import React from 'react'
import Styles from './ProfilePage.module.scss'
import Cover from '../../assets/cover.png'
import Avatar from '../../assets/avatar.png'
import { PostType, UserProfileType } from '../../types'
import { Posts, ProfileDescription, UsersContainer } from '../../components'

export const ProfilePage = ({
  profile,
  updateStatusThunkCreator,
  posts,
  status,
  isMyProfile,
  handleEditButton
}: {
  profile: UserProfileType | null
  updateStatusThunkCreator: (newStatus: string) => void
  posts: PostType[]
  status: string | null
  isMyProfile: boolean
  isEditMode: boolean
  handleEditButton: () => void
}): JSX.Element => {
  return (
    <section className={Styles.s__profile}>
      <div className={Styles.b__content_profile}>
        <div>
          <img src={Cover} alt="cover" width="100%" />
          <div className={Styles.avatar__wrap}>
            <img
              src={profile?.photos.small ? profile.photos.small : Avatar}
              alt="avatar"
              className={Styles.avatar}
            />
            {isMyProfile && (
              <button
                onClick={() => handleEditButton()}
                className={Styles.btn__edit}
              >
                Edit profile
              </button>
            )}
          </div>
        </div>
        <ProfileDescription
          profile={profile}
          status={status}
          updateStatusThunkCreator={updateStatusThunkCreator}
        />
        <Posts posts={posts} name={profile && profile.fullName} />
      </div>
      <div>
        <UsersContainer />
      </div>
    </section>
  )
}
