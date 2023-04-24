import React from 'react'
import Avatar from '../../assets/avatar.png'
import { ActionTypes, MessageType } from '../../types'
import MessagesStyles from './Messages.module.scss'
import { NewMessageContainer } from '../NewMessage/NewMessageContainer'

export const Messages = ({
  messages,
  dispatch
}: {
  messages: MessageType[]
  dispatch: (action: ActionTypes) => void
}): JSX.Element => {
  return (
    <div className={MessagesStyles.b__messages}>
      <div className={MessagesStyles.b__messages_content}>
        <img src={Avatar} alt="avatar" />
        <div>Name</div>
        <div>Joined May 2022</div>
      </div>
      <ul className={MessagesStyles.l__messages}>
        {messages.map(({ text, id }) => (
          <li key={id} className={MessagesStyles.l__messages_item}>
            <p>{text}</p>
          </li>
        ))}
      </ul>
      <NewMessageContainer dispatch={dispatch} />
    </div>
  )
}
