import React from 'react'
import { UserPostsContainer } from '../../components'
import HomePageStyles from './HomePage.module.scss'

export const HomePage = (): JSX.Element => {
  return (
    <section className={HomePageStyles.s__home}>
      <div className={HomePageStyles.s__home_content}>
        <h2 className={HomePageStyles.s__home_title}>Home</h2>
        <UserPostsContainer />
      </div>
      <div></div>
    </section>
  )
}
