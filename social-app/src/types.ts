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
  rerender: () => void
  addPost: () => void
  onPostChange: (newText: string) => void
  subscribe: (callback: () => void) => void
}
