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
import { Preloader } from '../../components'
import {
  followUserThunkCreator,
  getFriendsThunkCreator,
  getNotFriendsThunkCreator,
  unFollowUserThunkCreator
} from '../../redux/thunk-creator'

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
  followUserThunkCreator: (id: number) => void
  unFollowUserThunkCreator: (id: number) => void
  setCurrentFriendsPage: (currentPage: number) => void
  showMoreNotFriendsOnPage: () => void
  isAuthorized: boolean
  getFriendsThunkCreator: (currentPage: number, totalUsersCount: number) => void
  getNotFriendsThunkCreator: (currentPage: number) => void
}

class UsersPageAPIContainer extends React.Component<PropsType> {
  apiNotFriendsRequest = () => {
    this.props.getNotFriendsThunkCreator(this.props.notFriends.pageSize)
    // this.props.setIsLoading(true)
    // userAPI.getNotFriends(this.props.notFriends.pageSize).then((response) => {
    //   this.props.setIsLoading(false)
    //   this.props.setNotFriends(response.data.items, response.data.totalCount)
    // })
  }
  apiFriendsRequest = () => {
    this.props.getFriendsThunkCreator(
      this.props.friends.pageSize,
      this.props.friends.currentPage
    )
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

  handleFollowButton = (id: number, followed: boolean) => {
    followed
      ? this.props.unFollowUserThunkCreator(id)
      : this.props.followUserThunkCreator(id)
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
            handleFollowButton={this.handleFollowButton}
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
  showMoreNotFriendsOnPage,
  getFriendsThunkCreator,
  getNotFriendsThunkCreator,
  followUserThunkCreator,
  unFollowUserThunkCreator
})(UsersPageAPIContainer)
