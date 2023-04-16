import React from 'react'
import { UserPosts } from '../../components'
import HomePageStyles from './HomePage.module.scss'
import { PostsType } from '../../types'

export const HomePage = ({
  postsPage,
  addPost,
  onPostChange
}: {
  postsPage: PostsType
  addPost: () => void
  onPostChange: (newText: string) => void
}): JSX.Element => {
  return (
    <section className={HomePageStyles.s__home}>
      <div className={HomePageStyles.s__home_content}>
        <h2 className={HomePageStyles.s__home_title}>Home</h2>
        <UserPosts
          postsPage={postsPage}
          addPost={addPost}
          onPostChange={onPostChange}
        />
      </div>
      <div></div>
    </section>
  )
}
