import React from 'react'
import { ActionTypes } from '../../types'
import { addMessage, updateNewMessageText } from '../../redux/action-creator'
import { NewMessage } from './NewMessage'

export const NewMessageContainer = ({
  dispatch
}: {
  dispatch: (action: ActionTypes) => void
}) => {
  const updateNewMessage = (newTextMessage: string): void => {
    dispatch(updateNewMessageText(newTextMessage))
  }
  const addNewMessage = (): void => {
    dispatch(addMessage())
  }

  return (
    <NewMessage
      addNewMessage={addNewMessage}
      updateNewMessage={updateNewMessage}
    />
  )
}
