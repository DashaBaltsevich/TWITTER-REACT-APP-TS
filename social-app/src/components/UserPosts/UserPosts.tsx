import React from 'react'
import { Post } from '../index'
import './UserPosts.scss'
import { NewPost } from '../Post/NewPost'
import { PostsType } from '../../types'

export const UserPosts = ({
  postsPage,
  addPost,
  onPostChange
}: {
  postsPage: PostsType
  addPost: () => void
  onPostChange: (newText: string) => void
}): JSX.Element => {
  return (
    <div className="b-posts">
      <NewPost addPost={addPost} onPostChange={onPostChange} />
      <Post posts={postsPage.posts} />
    </div>
  )
}
