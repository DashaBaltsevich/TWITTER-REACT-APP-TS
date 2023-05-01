import React from 'react'
import { connect } from 'react-redux'
import { ActionTypes, StateTypes, UserType, UsersPageType } from '../../types'
import { followUser, setUsers, unFollowUser } from '../../redux/action-creator'
import { Friends, Users } from '../../components'
import styles from './UsersPage.module.scss'
import axios from 'axios'

interface PropsType {
  users: UserType[]
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  setUsers: (users: UserType[]) => void
}

class UsersPage extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props)
    alert('dd')
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => this.props.setUsers(response.data.items))
  }

  render() {
    return (
      <section className={styles.s__users}>
        <Friends
          users={this.props.users}
          followUser={this.props.followUser}
          unFollowUser={this.props.unFollowUser}
        />
        <Users
          users={this.props.users}
          followUser={this.props.followUser}
          unFollowUser={this.props.unFollowUser}
        />
      </section>
    )
  }
}

const mapStateToProps = (state: StateTypes): UsersPageType => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
  return {
    followUser: (id: number) => {
      dispatch(followUser(id))
    },
    unFollowUser: (id: number) => {
      dispatch(unFollowUser(id))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsers(users))
    }
  }
}

export const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage)
