import React, { useEffect } from 'react'
import { Users } from './Users'
import {
  followUserThunkCreator,
  getNotFriendsThunkCreator,
  showMoreNotFriendsOnPageThunkCreator
} from '../../redux/thunk-creator'
import { Preloader } from '../Preloader'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { RootState } from '../../redux/redux-store'

export const UsersContainer = () => {
  const notFriends = useAppSelector(
    (state: RootState) => state.usersPage.notFriends
  )

  const pageNumber = useAppSelector(
    (state: RootState) => state.usersPage.notFriends.currentPage
  )

  const isLoading = useAppSelector(
    (state: RootState) => state.usersPage.notFriends.isLoading
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getNotFriendsThunkCreator(notFriends.pageSize))
  }, [notFriends.pageSize, dispatch])

  const showMoreNotFriends = () => {
    dispatch(showMoreNotFriendsOnPageThunkCreator(pageNumber))
  }

  const handleFollowButton = (id: number) => {
    dispatch(followUserThunkCreator(id))
  }

  return (
    <>
      {!isLoading ? (
        <Users
          users={notFriends.users}
          handleFollowButton={handleFollowButton}
          showMoreNotFriends={showMoreNotFriends}
        />
      ) : (
        <Preloader />
      )}
    </>
  )
}
