import { createSelector } from 'reselect'
import { StateTypes } from '../types'

const getNotFriendsSelector = (state: StateTypes) =>
  state.usersPage.notFriends.users

export const getNotFriends = createSelector(
  getNotFriendsSelector,
  (notFriends) => {
    return notFriends.filter(() => true)
  }
)

export const getPageSize = (state: StateTypes) =>
  state.usersPage.notFriends.pageSize

export const getTotalUsersCount = (state: StateTypes) =>
  state.usersPage.notFriends.totalUsersCount

export const getCurrentPage = (state: StateTypes) =>
  state.usersPage.notFriends.currentPage

export const getIsLoading = (state: StateTypes) => state.usersPage.isLoading
