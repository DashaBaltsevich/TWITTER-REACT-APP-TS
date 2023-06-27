import React from 'react'
import { PostType, StateTypes } from '../../types'
import { connect } from 'react-redux'
import { addPost, updateNewPostText } from '../../redux/action-creator'

interface PropsType {
  posts: PostType[]
  addPost: () => void
  updateNewPostText: (newTextPost: string) => void
}

class HomePageContainer extends React.Component<PropsType> {
  render() {
    return <></>
  }
}

const mapStateToProps = (state: StateTypes) => {
  return {
    posts: state.userProfilePage.posts
  }
}

export default connect(mapStateToProps, {
  updateNewPostText,
  addPost
})(HomePageContainer)
