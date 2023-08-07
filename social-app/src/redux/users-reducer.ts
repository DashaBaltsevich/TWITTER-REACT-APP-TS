import { UsersPageType, TypeAction, UserType } from '../types'

const initialState: UsersPageType = {
  notFriends: {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isLoading: true
  },
  friends: {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isLoading: true
  }
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

export type SetMoreNotFriendsActionType = {
  type: TypeAction.SET_MORE_NOT_FRIENDS
  moreNotFriends: UserType[]
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

export type SetLoadingFriendsStateActionType = {
  type: TypeAction.SET_LOADING_FRIENDS_STATE
  isLoading: boolean
}

export type SetLoadingNotFriendsStateActionType = {
  type: TypeAction.SET_LOADING_NOTFRIENDS_STATE
  isLoading: boolean
}

type ActionTypes =
  | FollowUserActionType
  | UnfollowUserActionType
  | SetNotFriendsActionType
  | SetFriendsActionType
  | SetMoreNotFriendsActionType
  | SetCurrentFriendsPageActionType
  | ShowMoreNotFriendsOnPageActionType
  | SetLoadingFriendsStateActionType
  | SetLoadingNotFriendsStateActionType

export const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionTypes
): UsersPageType => {
  switch (action.type) {
    case TypeAction.FOLLOW_USER:
      const updatedFriends = state.notFriends.users
        .filter((el) => el.id === action.id)
        .map((el) => {
          return { ...el, followed: true }
        })
      return {
        ...state,
        friends: {
          ...state.friends,
          users: [...state.friends.users, ...updatedFriends]
        },
        notFriends: {
          ...state.notFriends,
          users: state.notFriends.users.filter((el) => el.id !== action.id)
        }
      }
    case TypeAction.UNFOLLOW_USER:
      const updatedNotFriends = state.friends.users
        .filter((el) => el.id === action.id)
        .map((el) => {
          return { ...el, followed: false }
        })
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          users: [...state.notFriends.users, ...updatedNotFriends]
        },
        friends: {
          ...state.friends,
          users: state.friends.users.filter((el) => el.id !== action.id)
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
        }
      }
    case TypeAction.SET_FRIENDS:
      return {
        ...state,
        friends: {
          ...state.friends,
          users: [...action.friends],
          totalUsersCount: action.totalUsersCount ?? 0
        }
      }
    case TypeAction.SET_CURRENT_FRIENDS_PAGE:
      return {
        ...state,
        friends: {
          ...state.friends,
          currentPage: action.currentPage ? action.currentPage : 1
        }
      }
    case TypeAction.SHOW_MORE_NOT_FRIENDS_ON_PAGE:
      return {
        ...state,
        notFriends: {
          ...state.notFriends,

          pageSize: (state.notFriends.pageSize += 5)
        }
      }
    case TypeAction.SET_MORE_NOT_FRIENDS:
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          users: [...state.notFriends.users, ...action.moreNotFriends],
          totalUsersCount: action.totalUsersCount ? action.totalUsersCount : 0
        }
      }

    case TypeAction.SET_LOADING_FRIENDS_STATE:
      return {
        ...state,
        friends: {
          ...state.friends,
          isLoading: action.isLoading
        }
        // isLoading: action.isLoading !== undefined ? action.isLoading : false
      }
    case TypeAction.SET_LOADING_NOTFRIENDS_STATE:
      return {
        ...state,
        notFriends: {
          ...state.notFriends,
          isLoading: action.isLoading
        }
      }

    default:
      return state
  }
}
