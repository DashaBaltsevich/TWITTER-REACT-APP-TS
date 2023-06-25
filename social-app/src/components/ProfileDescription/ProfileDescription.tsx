import React, { useState } from 'react'
import Styles from './ProfileDescription.module.scss'
import Calendar from '../../assets/calendar.svg'
import { ProfileStatus } from '..'
import { UserProfileType } from '../../types'
import { IoMdArrowDropdown } from 'react-icons/io'

export const ProfileDescription = ({
  profile,
  updateStatusThunkCreator,
  status
}: {
  profile: UserProfileType | null
  updateStatusThunkCreator: (newStatus: string) => void
  status: string | null
}) => {
  const [isContactsVisible, setIsContactsVisible] = useState(false)
  return (
    <div className={Styles.b__info}>
      <h4 className={Styles.b__info_name}>{profile?.fullName}</h4>
      <span className={Styles.b__info_subname}>@{profile?.fullName}</span>
      <div className={Styles.b__info_status}>
        <ProfileStatus
          status={status ?? 'no status'}
          updateStatusThunkCreator={updateStatusThunkCreator}
        />
      </div>
      <li>
        {/* @{profile.contacts.twitter && profile.contacts.twitter.split('@')[1]} */}
      </li>
      {profile?.aboutMe && (
        <div className={Styles.b__info_description}>
          <span>About</span>
          <p>{profile.aboutMe}</p>
        </div>
      )}
      <div className={Styles.b__info_work}>
        {profile?.lookingForAJob ? 'Open to work' : 'Not open to work'}
      </div>
      {profile?.lookingForAJob && (
        <div className={Styles.b__info_description}>
          <span>Description</span>
          <p>{profile.lookingForAJobDescription}</p>
        </div>
      )}
      {profile?.contacts &&
        Object.values(profile.contacts).some(
          (el) => typeof el === 'string'
        ) && (
          <div className={Styles.b__info_contacts}>
            <span>Contacts</span>
            <button
              onClick={() => {
                setIsContactsVisible(!isContactsVisible)
              }}
            >
              <IoMdArrowDropdown
                className={
                  isContactsVisible ? Styles.b__info_contacts_icon_active : ''
                }
              />
            </button>
            {isContactsVisible && (
              <ul>
                <li>{profile.contacts.facebook}</li>
                <li>{profile.contacts.vk}</li>
                <li>{profile.contacts.twitter}</li>
                <li>{profile.contacts.mainLink}</li>
                <li>{profile.contacts.github}</li>
                <li>{profile.contacts.instagram}</li>
                <li>{profile.contacts.website}</li>
                <li>{profile.contacts.youtube}</li>
              </ul>
            )}
          </div>
        )}
      <div className={Styles.b__info_data}>
        <img src={Calendar} alt="calendar" />
        <data>Joined November 2019</data>
      </div>
    </div>
  )
}
