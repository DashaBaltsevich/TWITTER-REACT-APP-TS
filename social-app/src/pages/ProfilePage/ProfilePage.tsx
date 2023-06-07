import React from 'react'
import Styles from './ProfilePage.module.scss'
import Cover from '../../assets/cover.png'
import Avatar from '../../assets/avatar.png'
// import Calendar from '../../assets/calendar.svg'
import { PostType, UserProfileType } from '../../types'
import { Posts, ProfileStatus } from '../../components'

export const ProfilePage = ({
  profile,
  updateStatusThunkCreator,
  posts,
  status
}: {
  profile: UserProfileType | null
  updateStatusThunkCreator: (newStatus: string) => void
  posts: PostType[]
  status: string | null
}): JSX.Element => {
  // console.log(profile.contacts.twitter.split('@')[1])
  console.log(profile?.aboutMe)
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
            <button className={Styles.btn__edit}>Edit profile</button>
          </div>
        </div>
        <ul className={Styles.l__info}>
          <li className={Styles.l__info__item}>{profile?.fullName}</li>
          <li>
            <ProfileStatus
              status={status ?? 'no status'}
              updateStatusThunkCreator={updateStatusThunkCreator}
            />
          </li>
          <li>
            {/* @{profile.contacts.twitter && profile.contacts.twitter.split('@')[1]} */}
          </li>
          {/* <li className={ProfilePageStyles.l__info__item}>{profile.aboutMe}</li>
        <li className={ProfilePageStyles.l__info__item}>
          <img src={Calendar} alt="calendar" />
          Joined November 2019
        </li>
        <li className={ProfilePageStyles.l__info__item}>City: Minsk</li>
        <li className={ProfilePageStyles.l__info__item}>Education: BSU</li>
        <li className={ProfilePageStyles.l__info__item}>WebSite: ...</li> */}
        </ul>
        <Posts posts={posts} name={profile && profile.fullName} />
      </div>
    </section>
  )
}
