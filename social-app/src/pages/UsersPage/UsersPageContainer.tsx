import React from 'react'
import { connect } from 'react-redux'
import { StateTypes, UserType, UsersPageType } from '../../types'
import {
  followUser,
  setCurrentFriendsPage,
  setFriends,
  setIsLoading,
  setNotFriends,
  showMoreNotFriendsOnPage,
  unFollowUser
} from '../../redux/action-creator'
import { UsersPage } from './UsersPage'
import { URL } from '../../App'
import axios from 'axios'
import { Preloader } from '../../components'

interface PropsType {
  notFriends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  friends: {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
  }
  isLoading: boolean
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  setNotFriends: (notFriends: UserType[], totalUsersCount: number) => void
  setFriends: (friends: UserType[], totalUsersCount: number) => void
  setCurrentFriendsPage: (currentPage: number) => void
  setIsLoading: (isLoading: boolean) => void
  showMoreNotFriendsOnPage: () => void
  isAuthorized: boolean
}

class UsersPageAPIContainer extends React.Component<PropsType> {
  apiNotFriendsRequest = () => {
    this.props.setIsLoading(true)
    axios
      .get(`${URL}/users`, {
        params: {
          count: this.props.notFriends.pageSize,
          friend: false
          // page: this.props.currentPage
        },
        withCredentials: true
      })
      .then((response) => {
        this.props.setIsLoading(false)
        this.props.setNotFriends(response.data.items, response.data.totalCount)
      })
      .catch((error) => console.log(error))
  }
  apiFriendsRequest = () => {
    this.props.setIsLoading(true)
    axios
      .get(`${URL}/users`, {
        params: {
          count: this.props.friends.pageSize,
          page: this.props.friends.currentPage,
          friend: true
        },
        withCredentials: true
      })
      .then((response) => {
        this.props.setIsLoading(false)
        this.props.setFriends(response.data.items, response.data.totalCount)
      })
      .catch((error) => console.log(error))
  }
  componentDidMount(): void {
    this.apiFriendsRequest()
    this.apiNotFriendsRequest()
  }
  onPageChanged = () => {
    // this.props.setCurrentPage(page)
    this.props.showMoreNotFriendsOnPage()
    this.apiNotFriendsRequest()
  }

  render(): React.ReactNode {
    return (
      <>
        {!this.props.isLoading ? (
          <UsersPage
            notFriends={this.props.notFriends}
            friends={this.props.friends}
            isLoading={this.props.isLoading}
            onPageChanged={this.onPageChanged}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
            isAuthorized={this.props.isAuthorized}
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
    notFriends: {
      users: state.usersPage.notFriends.users,
      pageSize: state.usersPage.notFriends.pageSize,
      totalUsersCount: state.usersPage.notFriends.totalUsersCount,
      currentPage: state.usersPage.notFriends.currentPage
    },
    friends: {
      users: state.usersPage.friends.users,
      pageSize: state.usersPage.friends.pageSize,
      totalUsersCount: state.usersPage.friends.totalUsersCount,
      currentPage: state.usersPage.friends.currentPage
    },
    isLoading: state.usersPage.isLoading
  }
}

// const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
//   return {
//     followUser: (id: number) => {
//       dispatch(followUser(id))
//     },
//     unFollowUser: (id: number) => {
//       dispatch(unFollowUser(id))
//     },
//     setUsers: (users: UserType[], totalUsersCount: number) => {
//       dispatch(setUsers(users, totalUsersCount))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPage(currentPage))
//     },
//     setIsLoading: (isLoading: boolean) => {
//       dispatch(setIsLoading(isLoading))
//     }
//   }
// }

export const UsersPageContainer = connect(mapStateToProps, {
  followUser,
  unFollowUser,
  setFriends,
  setNotFriends,
  setCurrentFriendsPage,
  setIsLoading,
  showMoreNotFriendsOnPage
})(UsersPageAPIContainer)
