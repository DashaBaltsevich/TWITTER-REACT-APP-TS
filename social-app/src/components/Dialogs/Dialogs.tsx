import React from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '../../assets/avatar.png'
import DialogsStyles from './Dialogs.module.scss'
import { DialogUserType, StateTypes } from '../../types'
import { connect } from 'react-redux'

const Dialogs = ({
  dialogUsers
}: {
  dialogUsers: DialogUserType[]
}): JSX.Element => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? DialogsStyles.l__dialogs_item_link_active
      : DialogsStyles.l__dialogs_item_link

  return (
    dialogUsers && (
      <div className={DialogsStyles.b__dialogs}>
        <h2 className={DialogsStyles.b__dialogs_title}>Messages</h2>
        <ul className={DialogsStyles.l__dialogs}>
          {dialogUsers.map(({ id, name }) => (
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
  )
}

const mapStateToProps = (state: StateTypes) => {
  return {
    dialogUsers: state.messagesPage.dialogUsers
  }
}

export const DialogsContainer = connect(mapStateToProps)(Dialogs)
