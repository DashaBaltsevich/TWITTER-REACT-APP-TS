import React from 'react'
import { Post } from '../index'
import './UserPosts.scss'
import { NewPost } from '../Post/NewPost'
import { PostsType, ActionTypes } from '../../types'

export const UserPosts = ({
  postsPage,
  dispatch
}: {
  postsPage: PostsType
  dispatch: (action: ActionTypes) => void
}): JSX.Element => {
  return (
    <div className="b-posts">
      <NewPost dispatch={dispatch} />
      <Post posts={postsPage.posts} />
    </div>
  )
}
