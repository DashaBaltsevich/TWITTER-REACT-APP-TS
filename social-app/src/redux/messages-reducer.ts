import { ActionTypes, MessagesType, TypeAction } from '../types'

const initialState: MessagesType = {
  messages: [
    {
      id: 1,
      text: '123'
    },
    {
      id: 2,
      text: '12d3'
    },
    {
      id: 3,
      text: '1dsd23'
    }
  ],
  dialogUsers: [
    {
      id: 1,
      name: 'Sasha'
    },
    {
      id: 2,
      name: 'Masha'
    }
  ],
  newMessageText: ''
}

export const messagesReducer = (
  state: MessagesType = initialState,
  action: ActionTypes
): MessagesType => {
  switch (action.type) {
    case TypeAction.ADD_MESSAGE: {
      const newMessage = {
        id: 4,
        text: state.newMessageText
      }
      const newState = { ...state }
      newState.messages = [...state.messages]
      newState.messages.push(newMessage)
      return newState
    }
    case TypeAction.UPDATE_NEW_MESSAGE_TEXT: {
      const newState = { ...state }
      newState.newMessageText = action.text ? action.text : ''
      return newState
    }
    default:
      return state
  }
}
