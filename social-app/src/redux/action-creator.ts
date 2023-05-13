import {
  TypeAction,
  ActionTypes,
  UserType,
  UserProfilePageType
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

export const setUsers = (
  users: UserType[],
  totalUsersCount: number
): ActionTypes => ({
  type: TypeAction.SET_USERS,
  users: users,
  totalUsersCount: totalUsersCount
})

export const setCurrentPage = (currentPage: number): ActionTypes => ({
  type: TypeAction.SET_CURRENT_PAGE,
  currentPage: currentPage
})

export const setIsLoading = (isLoading: boolean): ActionTypes => ({
  type: TypeAction.SET_LOADING_STATE,
  isLoading: isLoading
})

export const setUserProfile = (profile: UserProfilePageType): ActionTypes => ({
  type: TypeAction.SET_USER_PROFILE,
  profile: profile
})
