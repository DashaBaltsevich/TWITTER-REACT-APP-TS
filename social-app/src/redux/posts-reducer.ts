import { ActionTypes, PostsType, TypeAction } from '../types'

export const postsReducer = (
  state: PostsType,
  action: ActionTypes
): PostsType => {
  switch (action.type) {
    case TypeAction.ADD_POST:
      const newPost = {
        id: 5,
        post: state.newText,
        likeCount: 3
      }
      state.posts.push(newPost)
      return state
    case TypeAction.UPDATE_NEW_POST_TEXT:
      state.newText = action.text ? action.text : ''
      return state
    default:
      return state
  }
}
