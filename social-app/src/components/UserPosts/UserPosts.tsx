import React from 'react'
import './UserPosts.scss'
import { NewPost } from '../NewPost'
import { Posts } from './Post'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { RootState } from '../../redux/redux-store'
import { addPost } from '../../redux/action-creator'

export const UserPosts = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(
    (state: RootState) => state.userProfilePage.posts
  )
  const fullName = useAppSelector(
    (state: RootState) => state.userProfilePage.profile?.fullName
  )

  const onSubmitNewPost = ({ text }: { text: string }) => {
    dispatch(addPost(text))
  }

  return (
    <div className="b-posts">
      <NewPost onSubmitNewPost={onSubmitNewPost} />
      <Posts posts={posts} name={fullName} />
    </div>
  )
}
