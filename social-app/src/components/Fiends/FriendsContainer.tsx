import React from 'react'
import { Friends } from './Friends'
import { connect } from 'react-redux'
import { StateTypes, UserType } from '../../types'
import {
  getFriendsThunkCreator,
  unFollowUserThunkCreator
} from '../../redux/thunk-creator'
import { Preloader } from '../Preloader'

interface PropsType {
  friends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  isLoading: boolean
  getFriendsThunkCreator: (pageSize: number, pageNumber?: number) => void
  unFollowUserThunkCreator: (id: number) => void
}

class FriendsContainerAPI extends React.Component<PropsType> {
  componentDidMount(): void {
    this.props.getFriendsThunkCreator(this.props.friends.pageSize)
  }

  handlePagination = (pageNumber: number) => {
    this.props.getFriendsThunkCreator(this.props.friends.pageSize, pageNumber)
  }

  handleUnfollowButton = (id: number) => {
    unFollowUserThunkCreator(id)
  }
  render() {
    return (
      <>
        {!this.props.isLoading ? (
          <Friends
            friends={this.props.friends}
            handleUnfollowButton={this.handleUnfollowButton}
            handlePagination={this.handlePagination}
            pageSize={this.props.friends.pageSize}
            totalUsersCount={this.props.friends.totalUsersCount}
            currentPage={this.props.friends.currentPage}
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
    friends: {
      users: state.usersPage.friends.users,
      pageSize: state.usersPage.friends.pageSize,
      totalUsersCount: state.usersPage.friends.totalUsersCount,
      currentPage: state.usersPage.friends.currentPage
    },
    isLoading: state.usersPage.isLoading
  }
}

export const FriendsContainer = connect(mapStateToProps, {
  getFriendsThunkCreator,
  unFollowUserThunkCreator
})(FriendsContainerAPI)
