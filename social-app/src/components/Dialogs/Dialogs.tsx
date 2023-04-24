import React from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '../../assets/avatar.png'
import DialogsStyles from './Dialogs.module.scss'
import { MyContext } from '../../redux/context'

export const Dialogs = (): JSX.Element => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? DialogsStyles.l__dialogs_item_link_active
      : DialogsStyles.l__dialogs_item_link

  return (
    <MyContext.Consumer>
      {(store) =>
        store && (
          <div className={DialogsStyles.b__dialogs}>
            <h2 className={DialogsStyles.b__dialogs_title}>Messages</h2>
            <ul className={DialogsStyles.l__dialogs}>
              {store.getState().messagesPage.dialogUsers.map(({ id, name }) => (
                <li className={DialogsStyles.l__dialogs_item} key={id}>
                  <NavLink to={'/dialog/' + id} className={setActive}>
                    <img src={Avatar} alt="avatar" />
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </MyContext.Consumer>
  )
}
