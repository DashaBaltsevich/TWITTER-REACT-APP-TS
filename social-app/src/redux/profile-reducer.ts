import { UserProfilePageType, TypeAction, UserProfileType } from '../types'

const initialState: UserProfilePageType = {
  profile: null,
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
  newText: '',
  status: null
}

export type SetUserProfileActionType = {
  type: TypeAction.SET_USER_PROFILE
  profile: UserProfileType
}

export type UpdateStatusType = {
  type: TypeAction.UPDATE_STATUS
  newStatus: string
}

export type AddPostActionType = {
  type: TypeAction.ADD_POST
}

export type GetStatusType = {
  type: TypeAction.GET_USER_STATUS
  status: string
}

export type UpdateNewPostTextActionType = {
  type: TypeAction.UPDATE_NEW_POST_TEXT
  text: string
}

export const userProfileReducer = (
  state = initialState,
  action:
    | SetUserProfileActionType
    | UpdateStatusType
    | AddPostActionType
    | UpdateNewPostTextActionType
    | GetStatusType
): UserProfilePageType => {
  switch (action.type) {
    case TypeAction.SET_USER_PROFILE:
      return {
        ...state,
        profile: { ...action.profile }
      }
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
    case TypeAction.GET_USER_STATUS:
      return {
        ...state,
        status: action.status
      }
    case TypeAction.UPDATE_STATUS:
      return {
        ...state,
        status: action.newStatus
      }
    default:
      return state
  }
}
