import { ActionTypes, UsersPageType, TypeAction } from '../types'

const initialState: UsersPageType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1
}

export const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionTypes
): UsersPageType => {
  switch (action.type) {
    case TypeAction.FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action?.id) {
            return { ...el, followed: true }
          }
          return el
        })
      }
    case TypeAction.UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.id) {
            return { ...el, followed: false }
          }
          return el
        })
      }
    case TypeAction.SET_USERS:
      return {
        ...state,
        users: action.users ? [...action.users] : [...state.users],
        totalUsersCount: action.totalUsersCount ? action.totalUsersCount : 0
      }
    case TypeAction.SET_CURRENT_PAGE:
      return {
        ...state,
        users: state.users,
        currentPage: action.currentPage ? action.currentPage : 1
      }
    default:
      return state
  }
}
