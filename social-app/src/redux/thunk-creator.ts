import { authAPI, profileAPI, userAPI } from '../api/api'
import { LoginDataType } from '../pages/LogInPage/LogInPage'
import {
  followUser,
  setAuthorizationState,
  setFriends,
  setIsLoading,
  setNotFriends,
  setUserInformation,
  setUserProfile,
  unFollowUser
} from './action-creator'
import { AppDispatch } from './redux-store'

export const authorizationThunkCreator = () => {
  return (dispatch: AppDispatch) => {
    authAPI.authorization().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserInformation(response.data.data))
        dispatch(setAuthorizationState(true))
      }
    })
  }
}

export const logInThunkCreator = (
  values: LoginDataType,
  setIsLoginFormVisible: (isLoginFormVisible: boolean) => void
) => {
  return (dispatch: AppDispatch) => {
    authAPI.login(values).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthorizationState(true))
        setIsLoginFormVisible(false)
      }
    })
  }
}

export const logOutThunkCreator = () => {
  return (dispatch: AppDispatch) => {
    authAPI.logOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserInformation(null))
        dispatch(setAuthorizationState(false))
      }
    })
  }
}

export const getFriendsThunkCreator = (
  pageSize: number,
  currentPage: number
) => {
  return (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    userAPI.getFriends(pageSize, currentPage).then((response) => {
      dispatch(setIsLoading(false))
      dispatch(setFriends(response.data.items, response.data.totalCount))
    })
  }
}

export const getNotFriendsThunkCreator = (pageSize: number) => {
  return (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    userAPI.getNotFriends(pageSize).then((response) => {
      dispatch(setIsLoading(false))
      dispatch(setNotFriends(response.data.items, response.data.totalCount))
    })
  }
}

export const followUserThunkCreator =
  (id: number) => (dispatch: AppDispatch) => {
    userAPI.followUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followUser(id))
      }
    })
  }

export const unFollowUserThunkCreator =
  (id: number) => (dispatch: AppDispatch) => {
    userAPI.unFollowUserApi(id)
    dispatch(unFollowUser(id))
  }

export const getUserProfileThunkCreator =
  (userId: number) => (dispatch: AppDispatch) => {
    profileAPI.getUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data))
    })
  }
