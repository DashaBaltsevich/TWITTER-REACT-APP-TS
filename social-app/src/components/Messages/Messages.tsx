import React from 'react'
import Avatar from '../../assets/avatar.png'
import MessagesStyles from './Messages.module.scss'
import { RootState } from '../../redux/redux-store'
import { useAppSelector } from '../../hooks'
import { NewMessage } from '..'

export const Messages = () => {
  const messages = useAppSelector(
    (state: RootState) => state.messagesPage.messages
  )
  return (
    messages && (
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
        <NewMessage />
      </div>
    )
  )
}
