import React, { useEffect } from 'react'
import { Friends } from './Friends'
import { useSelector } from 'react-redux'
import { StateTypes } from '../../types'
import {
  getFriendsThunkCreator,
  unFollowUserThunkCreator
} from '../../redux/thunk-creator'
import { Preloader } from '../Preloader'
import { useAppDispatch } from '../../hooks'

export const FriendsContainer = () => {
  const friends = useSelector((state: StateTypes) => state.usersPage.friends)
  const isLoading = useSelector(
    (state: StateTypes) => state.usersPage.friends.isLoading
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getFriendsThunkCreator(friends.pageSize))
  }, [])

  const handlePagination = (pageNumber: number) => {
    dispatch(getFriendsThunkCreator(friends.pageSize, pageNumber))
  }

  const handleUnfollowButton = (id: number) => {
    dispatch(unFollowUserThunkCreator(id))
  }
  return (
    <>
      {!isLoading ? (
        <Friends
          friends={friends}
          handleUnfollowButton={handleUnfollowButton}
          handlePagination={handlePagination}
        />
      ) : (
        <Preloader />
      )}
    </>
  )
}
