import {
  TypeAction,
  ActionTypes,
  UserType,
  UserProfilePageType,
  UserDataType
} from '../types'

export const addPost = (): ActionTypes => ({
  type: TypeAction.ADD_POST
})

export const updateNewPostText = (text: string): ActionTypes => ({
  type: TypeAction.UPDATE_NEW_POST_TEXT,
  text: text
})

export const addMessage = (): ActionTypes => ({
  type: TypeAction.ADD_MESSAGE
})

export const updateNewMessageText = (text: string): ActionTypes => ({
  type: TypeAction.UPDATE_NEW_MESSAGE_TEXT,
  text: text
})

export const followUser = (id: number): ActionTypes => ({
  type: TypeAction.FOLLOW_USER,
  id: id
})

export const unFollowUser = (id: number): ActionTypes => ({
  type: TypeAction.UNFOLLOW_USER,
  id: id
})

export const setNotFriends = (
  notFriends: UserType[],
  totalUsersCount: number
): ActionTypes => ({
  type: TypeAction.SET_NOT_FRIENDS,
  notFriends: notFriends,
  totalUsersCount: totalUsersCount
})

export const setFriends = (friends: UserType[]): ActionTypes => ({
  type: TypeAction.SET_FRIENDS,
  friends: friends
})

export const setCurrentFriendsPage = (currentPage: number): ActionTypes => ({
  type: TypeAction.SET_CURRENT_FRIENDS_PAGE,
  currentPage: currentPage
})

export const showMoreNotFriendsOnPage = (): ActionTypes => ({
  type: TypeAction.SHOW_MORE_NOT_FRIENDS_ON_PAGE
})

export const setIsLoading = (isLoading: boolean): ActionTypes => ({
  type: TypeAction.SET_LOADING_STATE,
  isLoading: isLoading
})

export const setUserProfile = (profile: UserProfilePageType): ActionTypes => ({
  type: TypeAction.SET_USER_PROFILE,
  profile: profile
})

export const setUserInformation = (
  userData: UserDataType | null
): ActionTypes => ({
  type: TypeAction.SET_USER_INFORMATION,
  userInformation: userData
})

export const setAuthorizationState = (isAuthorized: boolean): ActionTypes => ({
  type: TypeAction.SET_AUTHORIZATION_STATE,
  isAuthorized: isAuthorized
})
