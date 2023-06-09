import { MessagesPageType, TypeAction } from '../types'

const initialState: MessagesPageType = {
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

export type AddMessageActionType = {
  type: TypeAction.ADD_MESSAGE
}

export type UpdateNewMessageTextActionType = {
  type: TypeAction.UPDATE_NEW_MESSAGE_TEXT
  text: string
}

export const messagesReducer = (
  state: MessagesPageType = initialState,
  action: AddMessageActionType | UpdateNewMessageTextActionType
): MessagesPageType => {
  switch (action.type) {
    case TypeAction.ADD_MESSAGE:
      const newMessage = {
        id: 4,
        text: state.newMessageText
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }

    case TypeAction.UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text
      }

    default:
      return state
  }
}
