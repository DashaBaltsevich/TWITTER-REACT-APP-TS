import { authAPI, profileAPI, userAPI } from '../api/api'
import { EditProfileValuesType } from '../components/EditProfileMode/EditProfileMode'
import { LoginDataType } from '../pages/LogInPage/LogInPage'
import {
  followUser,
  setAuthorizationState,
  setFriends,
  setIsLoading,
  setNotFriends,
  setUserInformation,
  setUserProfile,
  unFollowUser,
  setUserStatus,
  updateStatus,
  setCurrentFriendsPage,
  showMoreNotFriendsOnPage,
  updateProfile,
  getIsMyFriend
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
  setIsLoginFormVisible: (isLoginFormVisible: boolean) => void,
  setStatus: (status: object) => void
) => {
  return (dispatch: AppDispatch) => {
    authAPI.login(values).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthorizationState(true))
        setIsLoginFormVisible(false)
      } else if (response.data.resultCode === 10) {
        getCaptchaUrl(setStatus)
      } else {
        setStatus({ error: `${response.data.messages[0]}` })
      }
    })
  }
}

const getCaptchaUrl = (setStatus: (status: object) => void) => {
  authAPI.captcha().then((response) => {
    setStatus({ captcha: `${response.data.url}` })
  })
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
  pageNumber: number = 1
) => {
  return (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    dispatch(setCurrentFriendsPage(pageNumber))
    userAPI.getFriends(pageSize, pageNumber).then((response) => {
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

export const showMoreNotFriendsOnPageThunkCreator = () => {
  return (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    dispatch(showMoreNotFriendsOnPage())
    userAPI.getNotFriends().then((response) => {
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
    console.log(userId)
    profileAPI.getUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data))
    })
    profileAPI.getUserStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data))
    })
    profileAPI.isMyFriend(userId).then((response) => {
      console.log(response)
      dispatch(getIsMyFriend(response.data))
    })
  }

export const updateStatusThunkCreator =
  (newStatus: string) => (dispatch: AppDispatch) => {
    profileAPI.updateStatus(newStatus).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(updateStatus(newStatus))
      }
    })
  }

export const updateProfileThunkCreator =
  (newProfileInformation: EditProfileValuesType) => (dispatch: AppDispatch) => {
    profileAPI.updateProfile(newProfileInformation).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(updateProfile(newProfileInformation))
      }
    })
  }
