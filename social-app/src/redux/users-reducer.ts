import { ActionTypes, UsersPageType, TypeAction } from '../types'

const initialState: UsersPageType = {
  notFriends: {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1
  },
  friends: {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1
  },
  isLoading: true
}

export const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionTypes
): UsersPageType => {
  switch (action.type) {
    case TypeAction.FOLLOW_USER:
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          users: state.notFriends.users.map((el) => {
            if (el.id === action?.id) {
              return { ...el, followed: true }
            }
            return el
          })
        },
        friends: { ...state.friends, users: { ...state.friends.users } }
      }
    case TypeAction.UNFOLLOW_USER:
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          users: { ...state.notFriends.users }
        },
        friends: {
          ...state.friends,
          users: state.friends.users.map((el) => {
            if (el.id === action.id) {
              return { ...el, followed: false }
            }
            return el
          })
        }
      }
    case TypeAction.SET_NOT_FRIENDS:
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          users: action.notFriends
            ? [...action.notFriends]
            : [...state.notFriends.users],
          totalUsersCount: action.totalUsersCount ? action.totalUsersCount : 0
        },
        friends: { ...state.friends, users: state.friends.users }
      }
    case TypeAction.SET_FRIENDS:
      return {
        ...state,
        friends: {
          ...state.friends,
          users: action.friends
            ? [...action.friends]
            : [...state.friends.users],
          totalUsersCount: action.totalUsersCount ? action.totalUsersCount : 0
        },
        notFriends: {
          ...state.notFriends,
          users: state.notFriends.users
        }
      }
    case TypeAction.SET_CURRENT_FRIENDS_PAGE:
      return {
        ...state,
        friends: {
          ...state.friends,
          users: state.friends.users,
          currentPage: action.currentPage ? action.currentPage : 1
        },
        notFriends: {
          ...state.notFriends,
          users: state.notFriends.users
        }
      }
    case TypeAction.SHOW_MORE_NOT_FRIENDS_ON_PAGE:
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          users: state.notFriends.users,
          pageSize: (state.notFriends.pageSize += 3)
        },
        friends: { ...state.friends, users: state.friends.users }
      }
    case TypeAction.SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.isLoading !== undefined ? action.isLoading : false,
        friends: { ...state.friends, users: state.friends.users },
        notFriends: {
          ...state.notFriends,
          users: state.notFriends.users
        }
      }

    default:
      return state
  }
}
