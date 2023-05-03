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
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
}

export interface StateTypes {
  postsPage: PostsPageType
  messagesPage: MessagesPageType
  usersPage: UsersPageType
}

export enum TypeAction {
  ADD_POST,
  ADD_MESSAGE,
  UPDATE_NEW_POST_TEXT,
  UPDATE_NEW_MESSAGE_TEXT,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SET_USERS,
  SET_CURRENT_PAGE
}

export interface ActionTypes {
  type: TypeAction
  text?: string
  id?: number
  users?: UserType[]
  totalUsersCount?: number
  currentPage?: number
}
