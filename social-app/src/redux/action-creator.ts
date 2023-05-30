import {
  TypeAction,
  UserType,
  UserProfilePageType,
  UserDataType
} from '../types'
import {
  SetAuthorizationStateActionType,
  SetUserInformationActionType
} from './auth-reducer'
import {
  AddMessageActionType,
  UpdateNewMessageTextActionType
} from './messages-reducer'
import { AddPostActionType, UpdateNewPostTextActionType } from './posts-reducer'
import { SetUserProfileActionType } from './profile-reducer'
import {
  FollowUserActionType,
  SetCurrentFriendsPageActionType,
  SetFriendsActionType,
  SetLoadingStateActionType,
  SetNotFriendsActionType,
  ShowMoreNotFriendsOnPageActionType,
  UnfollowUserActionType
} from './users-reducer'

export const addPost = (): AddPostActionType => ({
  type: TypeAction.ADD_POST
})

export const updateNewPostText = (
  text: string
): UpdateNewPostTextActionType => ({
  type: TypeAction.UPDATE_NEW_POST_TEXT,
  text: text
})

export const addMessage = (): AddMessageActionType => ({
  type: TypeAction.ADD_MESSAGE
})

export const updateNewMessageText = (
  text: string
): UpdateNewMessageTextActionType => ({
  type: TypeAction.UPDATE_NEW_MESSAGE_TEXT,
  text: text
})

export const followUser = (id: number): FollowUserActionType => ({
  type: TypeAction.FOLLOW_USER,
  id: id
})

export const unFollowUser = (id: number): UnfollowUserActionType => ({
  type: TypeAction.UNFOLLOW_USER,
  id: id
})

export const setNotFriends = (
  notFriends: UserType[],
  totalUsersCount: number
): SetNotFriendsActionType => ({
  type: TypeAction.SET_NOT_FRIENDS,
  notFriends: notFriends,
  totalUsersCount: totalUsersCount
})

export const setFriends = (
  friends: UserType[],
  totalUsersCount: number
): SetFriendsActionType => ({
  type: TypeAction.SET_FRIENDS,
  friends,
  totalUsersCount
})

export const setCurrentFriendsPage = (
  currentPage: number
): SetCurrentFriendsPageActionType => ({
  type: TypeAction.SET_CURRENT_FRIENDS_PAGE,
  currentPage: currentPage
})

export const showMoreNotFriendsOnPage =
  (): ShowMoreNotFriendsOnPageActionType => ({
    type: TypeAction.SHOW_MORE_NOT_FRIENDS_ON_PAGE
  })

export const setIsLoading = (
  isLoading: boolean
): SetLoadingStateActionType => ({
  type: TypeAction.SET_LOADING_STATE,
  isLoading: isLoading
})

export const setUserProfile = (
  profile: UserProfilePageType
): SetUserProfileActionType => ({
  type: TypeAction.SET_USER_PROFILE,
  profile: profile
})

export const setUserInformation = (
  userData: UserDataType | null
): SetUserInformationActionType => ({
  type: TypeAction.SET_USER_INFORMATION,
  userInformation: userData
})

export const setAuthorizationState = (
  isAuthorized: boolean
): SetAuthorizationStateActionType => ({
  type: TypeAction.SET_AUTHORIZATION_STATE,
  isAuthorized: isAuthorized
})
