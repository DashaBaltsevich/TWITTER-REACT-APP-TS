import { UsersPageType, TypeAction, UserType } from '../types'

const initialState: UsersPageType = {
  notFriends: {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    scrollHeight: null
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

export type SetLoadingStateActionType = {
  type: TypeAction.SET_LOADING_STATE
  isLoading: boolean
}

export type setScrollHeightNotFriendListActionType = {
  type: TypeAction.SET_SCROLL_HEIGHT_NOT_FRIEND_LIST
  scrollHeight: number | null
}

type ActionTypes =
  | FollowUserActionType
  | UnfollowUserActionType
  | SetNotFriendsActionType
  | SetFriendsActionType
  | SetMoreNotFriendsActionType
  | SetCurrentFriendsPageActionType
  | ShowMoreNotFriendsOnPageActionType
  | SetLoadingStateActionType
  | setScrollHeightNotFriendListActionType

export const usersReducer = (
  state: UsersPageType = initialState,
  action: ActionTypes
): UsersPageType => {
  switch (action.type) {
    case TypeAction.FOLLOW_USER:
      const updatedFriends = state.notFriends.users.map((el) => {
        if (el.id === action.id) {
          return { ...el, followed: true }
        }
        return el
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
      const updatedNotFriends = state.friends.users.map((el) => {
        if (el.id === action.id) {
          return { ...el, followed: false }
        }
        return el
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
          currentPage: (state.notFriends.currentPage += 1)
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

    case TypeAction.SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.isLoading !== undefined ? action.isLoading : false
      }
    // case TypeAction.SET_SCROLL_HEIGHT_NOT_FRIEND_LIST:
    //   return {
    //     ...state,
    //     notFriends: {
    //       ...state.notFriends,
    //       scrollHeight: action.scrollHeight
    //     }
    //   }
    default:
      return state
  }
}
