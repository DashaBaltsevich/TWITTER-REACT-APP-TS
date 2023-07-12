import React, { useState } from 'react'
import Styles from './ProfileDescription.module.scss'
import Calendar from '../../assets/calendar.svg'
import { ProfileStatus } from '..'
import { IoMdArrowDropdown } from 'react-icons/io'
import { UserProfileType } from '../../types'

export const ProfileDescription = ({
  profile,
  status,
  updateStatus,
  isMyProfile
}: {
  profile: UserProfileType | null
  status: string | null
  updateStatus: (status: string) => void
  isMyProfile: boolean
}) => {
  const [isContactsVisible, setIsContactsVisible] = useState(false)
  return (
    <div className={Styles.b__info}>
      <h4 className={Styles.b__info_name}>{profile?.fullName}</h4>
      <span className={Styles.b__info_subname}>@{profile?.fullName}</span>
      <div className={Styles.b__info_status}>
        <ProfileStatus
          stateStatus={status}
          updateStatus={updateStatus}
          isMyProfile={isMyProfile}
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
                {Object.keys(profile.contacts).map((element) => {
                  const el = element as keyof typeof profile.contacts
                  return (
                    profile.contacts[el] && (
                      <li key={element}>
                        {el}:
                        <a
                          href={`https://${profile.contacts[el]}` || '/'}
                          rel="noopener noreferrer external"
                          target="_blank"
                        >
                          {profile.contacts[el]}
                        </a>
                      </li>
                    )
                  )
                })}
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
