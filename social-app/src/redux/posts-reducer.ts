import { ActionTypes, PostsType, TypeAction } from '../types'

const initialState: PostsType = {
  posts: [
    {
      id: 1,
      post: 'abc',
      likeCount: 12
    },
    {
      id: 2,
      post: 'ahbc',
      likeCount: 2
    },
    {
      id: 3,
      post: 'abfc',
      likeCount: 1
    }
  ],
  newText: ''
}

export const postsReducer = (
  state: PostsType = initialState,
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
