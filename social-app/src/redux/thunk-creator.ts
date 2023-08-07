import { ThunkDispatch } from 'redux-thunk'
import { authAPI, profileAPI, userAPI } from '../api/api'
import { EditProfileValuesType } from '../components/EditProfileMode/EditProfileMode'
import { LoginDataType } from '../pages/LogInPage/LogInPage'
import {
  followUser,
  setAuthorizationState,
  setFriends,
  setNotFriends,
  setUserInformation,
  setUserProfile,
  unFollowUser,
  setUserStatus,
  updateStatus,
  setCurrentFriendsPage,
  showMoreNotFriendsOnPage,
  updateProfile,
  getIsMyFriend,
  setIsLoadingFriends,
  setIsLoadingNotFriends
} from './action-creator'
import { ProfileActionTypes } from './profile-reducer'
import { AppDispatch, RootState } from './redux-store'

export const authorizationThunkCreator = () => {
  return async (dispatch: AppDispatch) => {
    await authAPI.authorization().then((response) => {
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
): any => {
  return async (dispatch: AppDispatch) => {
    await authAPI.login(values).then((response) => {
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

const getCaptchaUrl = async (setStatus: (status: object) => void) => {
  await authAPI.captcha().then((response) => {
    setStatus({ captcha: `${response.data.url}` })
  })
}

export const logOutThunkCreator = (): any => {
  return async (dispatch: AppDispatch) => {
    await authAPI.logOut().then((response) => {
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
): any => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoadingFriends(true))
    dispatch(setCurrentFriendsPage(pageNumber))
    await userAPI.getFriends(pageSize, pageNumber).then((response) => {
      dispatch(setIsLoadingFriends(false))
      dispatch(setFriends(response.data.items, response.data.totalCount))
    })
  }
}

export const getNotFriendsThunkCreator = (pageSize: number): any => {
  return async (dispatch: AppDispatch) => {
    await dispatch(setIsLoadingNotFriends(true))
    userAPI.getNotFriends(pageSize).then((response) => {
      dispatch(setIsLoadingNotFriends(false))
      dispatch(setNotFriends(response.data.items, response.data.totalCount))
    })
  }
}

export const showMoreNotFriendsOnPageThunkCreator = (pageSize: number): any => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoadingNotFriends(true))
    dispatch(showMoreNotFriendsOnPage())
    await userAPI.getNotFriends(pageSize).then((response) => {
      dispatch(setIsLoadingNotFriends(false))
      dispatch(setNotFriends(response.data.items, response.data.totalCount))
    })
  }
}

export const followUserThunkCreator =
  (id: number): any =>
  async (dispatch: AppDispatch) => {
    await userAPI.followUser(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followUser(id))
      }
    })
  }

export const unFollowUserThunkCreator =
  (id: number): any =>
  async (dispatch: AppDispatch) => {
    await userAPI.unFollowUserApi(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unFollowUser(id))
      }
    })
  }

export const getUserProfileThunkCreator =
  (userId: any): any =>
  async (dispatch: AppDispatch) => {
    await profileAPI.getUserProfile(userId).then((response) => {
      dispatch(setUserProfile(response.data))
    })
    await profileAPI.getUserStatus(userId).then((response) => {
      dispatch(setUserStatus(response.data))
    })
    await profileAPI.isMyFriend(userId).then((response) => {
      dispatch(getIsMyFriend(response.data))
    })
  }

export const updateStatusThunkCreator =
  (newStatus: string): any =>
  async (dispatch: AppDispatch) => {
    await profileAPI.updateStatus(newStatus).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(updateStatus(newStatus))
      }
    })
  }

export const updateProfileThunkCreator =
  (
    newProfileInformation: EditProfileValuesType,
    setStatus: (status: object) => void,
    setIsEditModeFormVisible: (isEditModeFormVisible: boolean) => void
  ): any =>
  async (
    dispatch: ThunkDispatch<RootState, {}, ProfileActionTypes>
  ): Promise<void> => {
    await profileAPI.updateProfile(newProfileInformation).then((response) => {
      console.log(response)
      if (response.data.resultCode === 0) {
        dispatch(updateProfile(newProfileInformation))
        setIsEditModeFormVisible(false)
      } else if (response.data.resultCode === 1) {
        setStatus({ error: `${response.data.messages[0]}` })
      }
    })
  }

// : ThunkDispatch<RootState, {}, AnyAction>
// : ThunkAction<void, RootState, {}, Action>
