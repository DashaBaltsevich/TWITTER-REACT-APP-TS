import React from 'react'
import { connect } from 'react-redux'
import { ActionTypes, StateTypes, UserType, UsersPageType } from '../../types'
import {
  followUser,
  setCurrentPage,
  setIsLoading,
  setUsers,
  unFollowUser
} from '../../redux/action-creator'
import { UsersPage } from './UsersPage'
import { URL } from '../../App'
import axios from 'axios'
import { Preloader } from '../../components'

interface PropsType {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isLoading: boolean
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  setUsers: (users: UserType[], totalUsersCount: number) => void
  setCurrentPage: (currentPage: number) => void
  setIsLoading: (isLoading: boolean) => void
}

class UsersPageAPIContainer extends React.Component<PropsType> {
  apiRequest = () => {
    this.props.setIsLoading(true)
    axios
      .get(`${URL}`, {
        params: {
          count: this.props.pageSize,
          page: this.props.currentPage
        }
      })
      .then((response) => {
        this.props.setIsLoading(false)
        this.props.setUsers(response.data.items, response.data.totalCount)
      })
      .catch((error) => console.log(error))
  }
  componentDidMount(): void {
    this.apiRequest()
  }
  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page)
    this.apiRequest()
  }

  render(): React.ReactNode {
    return (
      <>
        {!this.props.isLoading ? (
          <UsersPage
            users={this.props.users}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
          />
        ) : (
          <Preloader />
        )}
      </>
    )
  }
}

const mapStateToProps = (state: StateTypes): UsersPageType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading
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
    },
    setIsLoading: (isLoading: boolean) => {
      dispatch(setIsLoading(isLoading))
    }
  }
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPageAPIContainer)
