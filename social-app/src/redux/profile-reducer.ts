import { UserProfilePageType, TypeAction } from '../types'

const initialState: UserProfilePageType = {
  userId: null,
  aboutMe: '',
  lookingForAJob: false,
  lookingForAJobDescription: '',
  fullName: '',
  contacts: {
    github: '',
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: ''
  },
  photos: {
    small: '',
    large: ''
  }
}

type SetUserProfileActionType = {
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
        ...newProfile
      }
    default:
      return state
  }
}
