import { ActionTypes, MessagesType, TypeAction } from '../types'

export const messagesReducer = (
  state: MessagesType,
  action: ActionTypes
): MessagesType => {
  switch (action.type) {
    case TypeAction.ADD_MESSAGE:
      const newMessage = {
        id: 4,
        text: state.newMessageText
      }
      state.messages.push(newMessage)
      return state
    case TypeAction.UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text ? action.text : ''
      return state
    default:
      return state
  }
}
