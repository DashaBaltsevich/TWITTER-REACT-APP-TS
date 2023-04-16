import { TypeAction, ActionTypes } from '../types'

export const addPost = (): ActionTypes => ({
  type: TypeAction.ADD_POST
})

export const updateNewPostText = (text: string): ActionTypes => ({
  type: TypeAction.UPDATE_NEW_POST_TEXT,
  text: text
})
