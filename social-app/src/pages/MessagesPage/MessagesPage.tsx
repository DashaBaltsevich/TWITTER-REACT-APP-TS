import React from 'react'
import { Dialogs, Messages } from '../../components'
import { MessagesType } from '../../types'
import MessagesPageStyles from './MessagesPage.module.scss'

export const MessagesPage = ({
  messagesPage
}: {
  messagesPage: MessagesType
}): JSX.Element => {
  return (
    <section>
      <div className={MessagesPageStyles.s__messages_content}>
        <Dialogs dialogUsers={messagesPage.dialogUsers} />
        <Messages messages={messagesPage.messages} />
      </div>
    </section>
  )
}
