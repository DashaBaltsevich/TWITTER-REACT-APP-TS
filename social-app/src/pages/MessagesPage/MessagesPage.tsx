import React from 'react'
import { Dialogs, Messages } from '../../components'
import MessagesPageStyles from './MessagesPage.module.scss'

export const MessagesPage = (): JSX.Element => {
  return (
    <section>
      <div className={MessagesPageStyles.s__messages_content}>
        <Dialogs />
        <Messages />
      </div>
    </section>
  )
}
