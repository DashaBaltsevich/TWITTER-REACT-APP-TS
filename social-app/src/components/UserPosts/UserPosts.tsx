import React from 'react'
import './UserPosts.scss'
import { NewPost } from '../NewPost'
import { Posts } from './Post'
import { connect } from 'react-redux'
import { ActionTypes, PostType, StateTypes } from '../../types'
import { addPost, updateNewPostText } from '../../redux/action-creator'

const UserPosts = ({
  posts,
  addNewPost,
  updateNewPost
}: {
  posts: PostType[]
  addNewPost: () => void
  updateNewPost: (newTextPost: string) => void
}): JSX.Element => {
  return (
    <div className="b-posts">
      <NewPost addNewPost={addNewPost} updateNewPost={updateNewPost} />
      <Posts posts={posts} />
    </div>
  )
}

const mapStateToProps = (state: StateTypes) => {
  return {
    posts: state.postsPage.posts
  }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
  return {
    updateNewPost: (newTextPost: string) =>
      dispatch(updateNewPostText(newTextPost)),
    addNewPost: () => dispatch(addPost())
  }
}

export const UserPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts)
