import React from 'react'
import Avatar from '../../assets/avatar.png'
import MessagesStyles from './Messages.module.scss'
import { NewMessageContainer } from '../NewMessage/NewMessageContainer'
import { MyContext } from '../../redux/context'

export const Messages = (): JSX.Element => {
  return (
    <MyContext.Consumer>
      {(store) =>
        store && (
          <div className={MessagesStyles.b__messages}>
            <div className={MessagesStyles.b__messages_content}>
              <img src={Avatar} alt="avatar" />
              <div>Name</div>
              <div>Joined May 2022</div>
            </div>
            <ul className={MessagesStyles.l__messages}>
              {store.getState().messagesPage.messages.map(({ text, id }) => (
                <li key={id} className={MessagesStyles.l__messages_item}>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <NewMessageContainer dispatch={store.dispatch} />
          </div>
        )
      }
    </MyContext.Consumer>
  )
}
