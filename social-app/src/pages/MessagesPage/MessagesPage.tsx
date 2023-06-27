import React from 'react'
import { DialogsContainer, MessagesContainer } from '../../components'
import MessagesPageStyles from './MessagesPage.module.scss'

export const MessagesPage = (): JSX.Element => {
  return (
    <section>
      <div className={MessagesPageStyles.s__messages_content}>
        <DialogsContainer />
        <MessagesContainer />
      </div>
    </section>
  )
}
