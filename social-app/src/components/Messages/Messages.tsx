import React from 'react'
import Avatar from '../../assets/avatar.png'
import MessagesStyles from './Messages.module.scss'
import { NewMessageContainer } from '../index'
import { connect } from 'react-redux'
import { MessageType, StateTypes } from '../../types'

const Messages = ({ messages }: { messages: MessageType[] }): JSX.Element => {
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
        <NewMessageContainer />
      </div>
    )
  )
}

const mapStateToProps = (state: StateTypes) => {
  return {
    messages: state.messagesPage.messages
  }
}

export const MessagesContainer = connect(mapStateToProps)(Messages)
