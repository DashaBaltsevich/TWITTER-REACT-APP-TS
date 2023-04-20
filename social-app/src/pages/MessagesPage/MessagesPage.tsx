import React from 'react'
import { Dialogs, Messages } from '../../components'
import { ActionTypes, MessagesType } from '../../types'
import MessagesPageStyles from './MessagesPage.module.scss'

export const MessagesPage = ({
  messagesPage,
  dispatch
}: {
  messagesPage: MessagesType
  dispatch: (action: ActionTypes) => void
}): JSX.Element => {
  return (
    <section>
      <div className={MessagesPageStyles.s__messages_content}>
        <Dialogs dialogUsers={messagesPage.dialogUsers} />
        <Messages messages={messagesPage.messages} dispatch={dispatch} />
      </div>
    </section>
  )
}
