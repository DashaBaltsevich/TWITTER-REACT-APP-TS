import React from 'react'
import Styles from './ProfilePage.module.scss'
import Cover from '../../assets/cover.png'
import Avatar from '../../assets/avatar.png'
import { Posts, ProfileDescription, UsersContainer } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { RootState } from '../../redux/redux-store'
import {
  followUserThunkCreator,
  unFollowUserThunkCreator,
  updateStatusThunkCreator
} from '../../redux/thunk-creator'
import { setIsMyFriend } from '../../redux/action-creator'

export const ProfilePage = ({
  handleEditButton
}: {
  handleEditButton: () => void
}) => {
  const profile = useAppSelector(
    (state: RootState) => state.userProfilePage.profile
  )
  const status = useAppSelector(
    (state: RootState) => state.userProfilePage.status
  )
  const posts = useAppSelector(
    (state: RootState) => state.userProfilePage.posts
  )
  const isMyFriend = useAppSelector(
    (state: RootState) => state.userProfilePage.isMyFriend
  )
  const isMyProfile = useAppSelector(
    (state: RootState) =>
      state.auth.userInformation?.id === state.userProfilePage.profile?.userId
  )
  const dispatch = useAppDispatch()
  const handleFollow = (userId: number) => {
    if (isMyFriend) {
      dispatch(unFollowUserThunkCreator(userId))
      dispatch(setIsMyFriend(false))
    } else {
      dispatch(followUserThunkCreator(userId))
      dispatch(setIsMyFriend(true))
    }
  }
  const updateStatus = (status: string) => {
    dispatch(updateStatusThunkCreator(status))
  }
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
            {profile &&
              (isMyProfile ? (
                <button
                  onClick={() => handleEditButton()}
                  className={Styles.btn__edit}
                >
                  Edit profile
                </button>
              ) : (
                <button
                  onClick={() => handleFollow(profile.userId)}
                  className={Styles.btn__edit}
                >
                  {isMyFriend ? 'Unfollow' : 'Follow'}
                </button>
              ))}
          </div>
        </div>
        <ProfileDescription
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          isMyProfile={isMyProfile}
        />
        <Posts posts={posts} name={profile?.fullName} />
      </div>
      <div>
        <UsersContainer />
      </div>
    </section>
  )
}
