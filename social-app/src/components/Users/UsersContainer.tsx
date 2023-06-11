import React from 'react'
import { Users } from './Users'
import { connect } from 'react-redux'
import { StateTypes, UserType } from '../../types'
import {
  followUserThunkCreator,
  getNotFriendsThunkCreator
} from '../../redux/thunk-creator'
import { showMoreNotFriendsOnPage } from '../../redux/action-creator'
import { Preloader } from '../Preloader'

interface PropsType {
  notFriends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  isLoading: boolean
  getNotFriendsThunkCreator: (pageSize: number) => void
  followUserThunkCreator: (id: number) => void
  showMoreNotFriendsOnPage: () => void
}

class UsersContainerAPI extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getNotFriendsThunkCreator(this.props.notFriends.pageSize)
  }

  handlePagination = async () => {
    await this.props.showMoreNotFriendsOnPage()
    this.props.getNotFriendsThunkCreator(this.props.notFriends.pageSize)
  }

  handleFollowButton = (id: number) => {
    this.props.followUserThunkCreator(id)
  }

  render() {
    return (
      <>
        {!this.props.isLoading ? (
          <Users
            users={this.props.notFriends.users}
            handleFollowButton={this.handleFollowButton}
            handlePagination={this.handlePagination}
            pageSize={this.props.notFriends.pageSize}
          />
        ) : (
          <Preloader />
        )}
      </>
    )
  }
}

const mapStateToProps = (state: StateTypes) => {
  return {
    notFriends: {
      users: state.usersPage.notFriends.users,
      pageSize: state.usersPage.notFriends.pageSize,
      totalUsersCount: state.usersPage.notFriends.totalUsersCount,
      currentPage: state.usersPage.notFriends.currentPage
    },
    isLoading: state.usersPage.isLoading
  }
}

export const UsersContainer = connect(mapStateToProps, {
  showMoreNotFriendsOnPage,
  getNotFriendsThunkCreator,
  followUserThunkCreator
})(UsersContainerAPI)
