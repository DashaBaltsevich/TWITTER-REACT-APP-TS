import { UserProfilePageType, TypeAction } from '../types'

const initialState: UserProfilePageType = {
  aboutMe: null,
  contacts: {
    github: null,
    vk: null,
    facebook: null,
    instagram: null,
    twitter: null,
    website: null,
    youtube: null,
    mainLink: null
  },
  fullName: '',
  lookingForAJob: false,
  lookingForAJobDescription: null,
  photos: {
    small: '',
    large: ''
  },
  userId: null
}

export type SetUserProfileActionType = {
  type: TypeAction.SET_USER_PROFILE
  profile: UserProfilePageType
}

export const userProfileReducer = (
  state = initialState,
  action: SetUserProfileActionType
): UserProfilePageType => {
  switch (action.type) {
    case TypeAction.SET_USER_PROFILE:
      const newProfile = action.profile
      return {
        ...state,
        ...newProfile
      }
    default:
      return state
  }
}
