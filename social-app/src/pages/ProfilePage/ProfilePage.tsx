import React, { FC } from 'react'
import ProfilePageStyles from './ProfilePage.module.scss'
import Cover from '../../assets/cover.png'
import Avatar from '../../assets/avatar.png'
import Calendar from '../../assets/calendar.svg'

export const ProfilePage: FC = (): JSX.Element => {
  return (
    <section>
      <div>
        <img src={Cover} alt="cover" width="100%" />
        <div className={ProfilePageStyles.avatar__wrap}>
          <img src={Avatar} alt="avatar" className={ProfilePageStyles.avatar} />
          <button className={ProfilePageStyles.btn__edit}>Edit profile</button>
        </div>
      </div>
      <ul className={ProfilePageStyles.l__info}>
        <li className={ProfilePageStyles.l__info__item}>Name</li>
        <li className={ProfilePageStyles.l__info__item}>@name</li>
        <li className={ProfilePageStyles.l__info__item}>description</li>
        <li className={ProfilePageStyles.l__info__item}>
          <img src={Calendar} alt="calendar" />
          Joined November 2019
        </li>
        <li className={ProfilePageStyles.l__info__item}>City: Minsk</li>
        <li className={ProfilePageStyles.l__info__item}>Education: BSU</li>
        <li className={ProfilePageStyles.l__info__item}>WebSite: ...</li>
      </ul>
    </section>
  )
}
