import React from 'react'
import { connect } from 'react-redux'
import { ActionTypes, StateTypes, UserType, UsersPageType } from '../../types'
import {
  followUser,
  setCurrentPage,
  setUsers,
  unFollowUser
} from '../../redux/action-creator'
import { Friends, Users } from '../../components'
import baseURL from '../../App'
import styles from './UsersPage.module.scss'
import axios from 'axios'

interface PropsType {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  setUsers: (users: UserType[], totalUsersCount: number) => void
  setCurrentPage: (currentPage: number) => void
}

class UsersPage extends React.Component<PropsType> {
  apiRequest = (currentPage = this.props.currentPage) => {
    axios
      .get(`${baseURL}`, {
        params: {
          count: this.props.pageSize,
          page: currentPage
        }
      })
      .then((response) =>
        this.props.setUsers(response.data.items, response.data.totalCount)
      )
  }
  componentDidMount(): void {
    this.apiRequest()
  }

  render() {
    return (
      <section className={styles.s__users}>
        <Friends
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          followUser={this.props.followUser}
          unFollowUser={this.props.unFollowUser}
          setCurrentPage={this.props.setCurrentPage}
        />
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          followUser={this.props.followUser}
          unFollowUser={this.props.unFollowUser}
          setCurrentPage={this.props.setCurrentPage}
          apiRequest={this.apiRequest}
        />
      </section>
    )
  }
}

const mapStateToProps = (state: StateTypes): UsersPageType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    setUsers: (users: UserType[], totalUsersCount: number) => {
      dispatch(setUsers(users, totalUsersCount))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPage(currentPage))
    }
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage)
