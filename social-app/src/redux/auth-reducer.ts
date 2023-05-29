import { TypeAction, UserInformationType, UserDataType } from '../types'

const initialState: UserInformationType = {
  userInformation: null,
  isAuthorized: false
}

export type SetUserInformationActionType = {
  type: TypeAction.SET_USER_INFORMATION
  userInformation: UserDataType | null
}

export type SetAuthorizationStateActionType = {
  type: TypeAction.SET_AUTHORIZATION_STATE
  isAuthorized: boolean
}

type ActionTypes =
  | SetUserInformationActionType
  | SetAuthorizationStateActionType

export const authReducer = (
  state: UserInformationType = initialState,
  action: ActionTypes
): UserInformationType => {
  switch (action.type) {
    case TypeAction.SET_USER_INFORMATION:
      return {
        ...state,
        userInformation: action.userInformation
      }
    case TypeAction.SET_AUTHORIZATION_STATE:
      return {
        ...state,
        isAuthorized: action.isAuthorized
      }
    default:
      return state
  }
}
