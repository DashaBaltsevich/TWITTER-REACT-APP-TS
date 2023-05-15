import { ActionTypes, TypeAction, UserInformationType } from '../types'

const initialState: UserInformationType = {
  userInformation: null,
  isAuthorized: false
}

export const authReducer = (
  state: UserInformationType = initialState,
  action: ActionTypes
): UserInformationType => {
  switch (action.type) {
    case TypeAction.SET_USER_INFORMATION:
      return {
        ...state,
        userInformation:
          action?.userInformation !== undefined ? action.userInformation : null
      }
    case TypeAction.SET_AUTHORIZATION_STATE:
      return {
        ...state,
        isAuthorized:
          action.isAuthorized !== undefined ? action.isAuthorized : false
      }
    default:
      return state
  }
}
