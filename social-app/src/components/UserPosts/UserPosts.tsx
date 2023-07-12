import React from 'react'
import './UserPosts.scss'
import { NewPost } from '../NewPost'
import { Posts } from './Post'
import { useAppSelector } from '../../hooks'
import { RootState } from '../../redux/redux-store'

export const UserPosts = (): JSX.Element => {
  const posts = useAppSelector(
    (state: RootState) => state.userProfilePage.posts
  )
  const fullName = useAppSelector(
    (state: RootState) => state.userProfilePage.profile?.fullName
  )

  return (
    <div className="b-posts">
      <NewPost />
      <Posts posts={posts} name={fullName} />
    </div>
  )
}
