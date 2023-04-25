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
    case TypeAction.ADD_POST: {
      const newPost = {
        id: 5,
        post: state.newText,
        likeCount: 3
      }
      const newState = { ...state }
      newState.posts = [...state.posts]
      newState.posts.push(newPost)
      return newState
    }
    case TypeAction.UPDATE_NEW_POST_TEXT: {
      const newState = { ...state }
      newState.newText = action.text ? action.text : ''
      return newState
    }
    default:
      return state
  }
}
