import React from 'react'
import Avatar from '../../assets/avatar.png'
import MessagesStyles from './Messages.module.scss'
import { RootState } from '../../redux/redux-store'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { NewMessage } from '..'
import { addMessage } from '../../redux/action-creator'

export const Messages = () => {
  const dispatch = useAppDispatch()
  const messages = useAppSelector(
    (state: RootState) => state.messagesPage.messages
  )
  const onSubmitNewMessage = ({ newMessage }: { newMessage: string }) => {
    console.log('123')
    dispatch(addMessage(newMessage))
  }

  return (
    messages && (
      <div className={MessagesStyles.b__messages}>
        <div className={MessagesStyles.b__messages_content}>
          <img src={Avatar} alt="avatar" />
          <div>Name</div>
          <div>Joined May 2022</div>
        </div>
        <div>
          <ul className={MessagesStyles.l__messages}>
            {messages.map(({ text, id }) => (
              <li key={id} className={MessagesStyles.l__messages_item}>
                <p>{text}</p>
              </li>
            ))}
          </ul>
          <NewMessage onSubmitNewMessage={onSubmitNewMessage} />
        </div>
      </div>
    )
  )
}
