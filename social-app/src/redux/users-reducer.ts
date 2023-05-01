import { ActionTypes, UsersPageType, TypeAction } from '../types'

const initialState: UsersPageType = {
  users: []
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
        users: action.users
          ? [...state.users, ...action.users]
          : [...state.users]
      }
    default:
      return state
  }
}
