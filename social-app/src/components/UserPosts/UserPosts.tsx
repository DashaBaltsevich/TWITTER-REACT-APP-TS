import React from 'react'
import { Post } from '../index'
import './UserPosts.scss'

import { PostsType, ActionTypes } from '../../types'
import { NewPostContainer } from '../NewPost'

export const UserPosts = ({
  postsPage,
  dispatch
}: {
  postsPage: PostsType
  dispatch: (action: ActionTypes) => void
}): JSX.Element => {
  return (
    <div className="b-posts">
      <NewPostContainer dispatch={dispatch} />
      <Post posts={postsPage.posts} />
    </div>
  )
}
