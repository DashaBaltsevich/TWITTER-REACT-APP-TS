import { PostsPageType, TypeAction } from '../types'

const initialState: PostsPageType = {
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

export type AddPostActionType = {
  type: TypeAction.ADD_POST
}

export type UpdateNewPostTextActionType = {
  type: TypeAction.UPDATE_NEW_POST_TEXT
  text: string
}

export const postsReducer = (
  state: PostsPageType = initialState,
  action: AddPostActionType | UpdateNewPostTextActionType
): PostsPageType => {
  switch (action.type) {
    case TypeAction.ADD_POST:
      const newPost = {
        id: 5,
        post: state.newText,
        likeCount: 3
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      }

    case TypeAction.UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newText: action.text ? action.text : ''
      }
    default:
      return state
  }
}
