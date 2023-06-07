import React from 'react'
import './UserPosts.scss'
import { NewPost } from '../NewPost'
import { Posts } from './Post'
import { connect } from 'react-redux'
import { PostType, StateTypes, UserProfileType } from '../../types'
import { addPost, updateNewPostText } from '../../redux/action-creator'

const UserPosts = ({
  posts,
  profile,
  addPost,
  updateNewPostText
}: {
  posts: PostType[]
  profile: UserProfileType | null
  addPost: () => void
  updateNewPostText: (newTextPost: string) => void
}): JSX.Element => {
  return (
    <div className="b-posts">
      <NewPost addPost={addPost} updateNewPostText={updateNewPostText} />
      <Posts posts={posts} name={profile && profile.fullName} />
    </div>
  )
}

const mapStateToProps = (state: StateTypes) => {
  return {
    posts: state.userProfilePage.posts,
    profile: state.userProfilePage.profile
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
