export type DialogUserType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  text: string
}

export type PostType = {
  id: number
  post: string
  likeCount: number
}

export interface PostsPageType {
  posts: PostType[]
  newText: string
}

export interface MessagesPageType {
  messages: MessageType[]
  dialogUsers: DialogUserType[]
  newMessageText: string
}

export interface UserType {
  id: number
  name: string
  uniqueUrlName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  followed: boolean
  status: string | null
}

export interface UsersPageType {
  notFriends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  friends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  isLoading: boolean
}
export interface UserProfilePageType {
  userId: number | null
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string | null
    large: string | null
  }
}

export interface UserDataType {
  id: number
  email: string
  login: string
}

export interface UserInformationType {
  userInformation: UserDataType | null
  isAuthorized: boolean
}

export interface StateTypes {
  postsPage: PostsPageType
  messagesPage: MessagesPageType
  usersPage: UsersPageType
  userProfilePage: UserProfilePageType
  auth: UserInformationType
}

export enum TypeAction {
  ADD_POST,
  ADD_MESSAGE,
  UPDATE_NEW_POST_TEXT,
  UPDATE_NEW_MESSAGE_TEXT,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_NOT_FRIENDS,
  SET_FRIENDS,
  SET_CURRENT_FRIENDS_PAGE,
  SET_LOADING_STATE,
  SET_USER_PROFILE,
  SET_USER_INFORMATION,
  SET_AUTHORIZATION_STATE,
  SHOW_MORE_NOT_FRIENDS_ON_PAGE
}
