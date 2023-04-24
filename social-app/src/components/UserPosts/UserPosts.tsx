import React from 'react'
import { Post } from '../index'
import './UserPosts.scss'
import { NewPostContainer } from '../NewPost'

export const UserPosts = (): JSX.Element => {
  return (
    <div className="b-posts">
      <NewPostContainer />
      <Post />
    </div>
  )
}
