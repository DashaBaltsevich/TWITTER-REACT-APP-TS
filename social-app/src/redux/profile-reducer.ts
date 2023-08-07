import { EditProfileValuesType } from '../components/EditProfileMode/EditProfileMode'
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
  status: null,
  isMyFriend: false
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
  text: string
}

export type GetStatusType = {
  type: TypeAction.GET_USER_STATUS
  status: string
}

export type UpdateProfileActionType = {
  type: TypeAction.UPDATE_PROFILE
  newProfileInformation: EditProfileValuesType
}

export type GetIsMyFriendActionType = {
  type: TypeAction.GET_IS_MY_FRIEND
  isMyFriend: boolean
}

export type SetIsMyFriendActionType = {
  type: TypeAction.SET_IS_MY_FRIEND
  isMyFriend: boolean
}

export type ProfileActionTypes =
  | SetUserProfileActionType
  | UpdateStatusType
  | AddPostActionType
  | GetStatusType
  | UpdateProfileActionType
  | GetIsMyFriendActionType
  | SetIsMyFriendActionType

export const userProfileReducer = (
  state: UserProfilePageType = initialState,
  action: ProfileActionTypes
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
        post: action.text,
        likeCount: 3
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
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
    case TypeAction.UPDATE_PROFILE:
      const profile = state.profile
        ? {
            ...state,
            profile: {
              ...state.profile,
              ...action.newProfileInformation,
              contacts: { ...action.newProfileInformation.contacts },
              photos: { ...state.profile.photos }
            },
            posts: [...state.posts]
          }
        : { ...state }

      return profile
    case TypeAction.GET_IS_MY_FRIEND:
      return {
        ...state,
        isMyFriend: action.isMyFriend
      }
    case TypeAction.SET_IS_MY_FRIEND:
      return {
        ...state,
        isMyFriend: action.isMyFriend
      }
    default:
      return state
  }
}
