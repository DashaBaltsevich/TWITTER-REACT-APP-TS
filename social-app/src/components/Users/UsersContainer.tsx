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
// import { setScrollHeightNotFriendList } from '../../redux/action-creator'

export const UsersContainer = () => {
  const notFriends = useAppSelector(
    (state: RootState) => state.usersPage.notFriends
  )
  const scrollHeight = useAppSelector(
    (state: RootState) => state.usersPage.notFriends.scrollHeight
  )
  console.log(scrollHeight)
  const pageNumber = useAppSelector(
    (state: RootState) => state.usersPage.notFriends.currentPage
  )
  console.log(pageNumber)
  const isLoading = useAppSelector(
    (state: RootState) => state.usersPage.isLoading
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getNotFriendsThunkCreator(notFriends.pageSize))
  }, [notFriends.pageSize, dispatch])

  const showMoreNotFriends = () => {
    // dispatch(setScrollHeightNotFriendList(scrollHeight))
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
