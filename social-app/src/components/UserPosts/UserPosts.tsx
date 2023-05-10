import React from 'react'
import './UserPosts.scss'
import { NewPost } from '../NewPost'
import { Posts } from './Post'
import { connect } from 'react-redux'
import { PostType, StateTypes } from '../../types'
import { addPost, updateNewPostText } from '../../redux/action-creator'

const UserPosts = ({
  posts,
  addPost,
  updateNewPostText
}: {
  posts: PostType[]
  addPost: () => void
  updateNewPostText: (newTextPost: string) => void
}): JSX.Element => {
  return (
    <div className="b-posts">
      <NewPost addPost={addPost} updateNewPostText={updateNewPostText} />
      <Posts posts={posts} />
    </div>
  )
}

const mapStateToProps = (state: StateTypes) => {
  return {
    posts: state.postsPage.posts
  }
}

// const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
//   return {
//     updateNewPost: (newTextPost: string) =>
//       dispatch(updateNewPostText(newTextPost)),
//     addNewPost: () => dispatch(addPost())
//   }
// }

export const UserPostsContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost
})(UserPosts)
