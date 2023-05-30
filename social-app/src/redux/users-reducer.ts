import { UsersPageType, TypeAction, UserType } from '../types'

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

export type FollowUserActionType = {
  type: TypeAction.FOLLOW_USER
  id: number
}

export type UnfollowUserActionType = {
  type: TypeAction.UNFOLLOW_USER
  id: number
}

export type SetNotFriendsActionType = {
  type: TypeAction.SET_NOT_FRIENDS
  notFriends: UserType[]
  totalUsersCount: number
}

export type SetFriendsActionType = {
  type: TypeAction.SET_FRIENDS
  friends: UserType[]
  totalUsersCount: number
}

export type SetCurrentFriendsPageActionType = {
  type: TypeAction.SET_CURRENT_FRIENDS_PAGE
  currentPage: number
}

export type ShowMoreNotFriendsOnPageActionType = {
  type: TypeAction.SHOW_MORE_NOT_FRIENDS_ON_PAGE
}

export type SetLoadingStateActionType = {
  type: TypeAction.SET_LOADING_STATE
  isLoading: boolean
}

type ActionTypes =
  | FollowUserActionType
  | UnfollowUserActionType
  | SetNotFriendsActionType
  | SetFriendsActionType
  | SetCurrentFriendsPageActionType
  | ShowMoreNotFriendsOnPageActionType
  | SetLoadingStateActionType

export const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionTypes
): UsersPageType => {
  switch (action.type) {
    case TypeAction.FOLLOW_USER:
      state.notFriends.users.forEach((el) => {
        if (el.id === action?.id) {
          state.friends.users.push({ ...el, followed: true })
        }
      })
      return {
        ...state,
        friends: { ...state.friends, users: [...state.friends.users] },
        notFriends: {
          ...state.notFriends,
          users: state.notFriends.users.filter((el) => {
            return el.id !== action.id
          })
        }
      }
    case TypeAction.UNFOLLOW_USER:
      state.friends.users.forEach((el) => {
        if (el.id === action?.id) {
          state.notFriends.users.push({ ...el, followed: false })
        }
      })
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          users: [...state.notFriends.users]
        },
        friends: {
          ...state.friends,
          users: state.friends.users.filter((el) => {
            return el.id !== action.id
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
        friends: { ...state.friends, users: [...state.friends.users] }
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
          users: [...state.notFriends.users]
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
          users: [...state.notFriends.users]
        }
      }
    case TypeAction.SHOW_MORE_NOT_FRIENDS_ON_PAGE:
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          users: [...state.notFriends.users],
          pageSize: (state.notFriends.pageSize += 3)
        },
        friends: { ...state.friends, users: [...state.friends.users] }
      }
    case TypeAction.SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.isLoading !== undefined ? action.isLoading : false,
        friends: { ...state.friends, users: [...state.friends.users] },
        notFriends: {
          ...state.notFriends,
          users: [...state.notFriends.users]
        }
      }

    default:
      return state
  }
}
