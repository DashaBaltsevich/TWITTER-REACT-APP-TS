import { UserProfilePageType, TypeAction, ActionTypes } from '../types'

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

export const userProfileReducer = (
  state = initialState,
  action: ActionTypes
): UserProfilePageType => {
  switch (action.type) {
    case TypeAction.SET_USER_PROFILE:
      console.log(action.profile)
      const newProfile =
        action.profile !== undefined ? action.profile : initialState
      return {
        ...newProfile
      }
    default:
      return state
  }
}
