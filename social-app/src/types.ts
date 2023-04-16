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

export interface PostsType {
  posts: PostType[]
  newText: string
}

export interface MessagesType {
  messages: MessageType[]
  dialogUsers: DialogUserType[]
}

export interface StateTypes {
  postsPage: PostsType
  messagesPage: MessagesType
}

export interface StoreTypes {
  _state: StateTypes
  getState: () => StateTypes
  _callSubscriber: () => void
  subscribe: (callback: () => void) => void
  dispatch: (action: ActionTypes) => void
}

export enum TypeAction {
  ADD_POST,
  UPDATE_NEW_POST_TEXT
}

export interface ActionTypes {
  type: TypeAction
  text?: string
}
