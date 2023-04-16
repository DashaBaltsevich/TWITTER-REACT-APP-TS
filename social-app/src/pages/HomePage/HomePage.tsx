import React from 'react'
import { UserPosts } from '../../components'
import HomePageStyles from './HomePage.module.scss'
import { PostsType, ActionTypes } from '../../types'

export const HomePage = ({
  postsPage,
  dispatch
}: {
  postsPage: PostsType
  dispatch: (action: ActionTypes) => void
}): JSX.Element => {
  return (
    <section className={HomePageStyles.s__home}>
      <div className={HomePageStyles.s__home_content}>
        <h2 className={HomePageStyles.s__home_title}>Home</h2>
        <UserPosts postsPage={postsPage} dispatch={dispatch} />
      </div>
      <div></div>
    </section>
  )
}
