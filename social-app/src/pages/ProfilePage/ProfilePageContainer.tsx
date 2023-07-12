import React, { useEffect, useState } from 'react'
import { ProfilePage } from './ProfilePage'
import { useParams } from 'react-router-dom'
import { EditProfileModeContainer, ModalWindow } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { RootState } from '../../redux/redux-store'
import { getUserProfileThunkCreator } from '../../redux/thunk-creator'

export const ProfilePageContainer = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const myId = useAppSelector(
    (state: RootState) => state.auth.userInformation?.id
  )
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    let userId = params.user_id || myId
    dispatch(getUserProfileThunkCreator(userId))
  }, [dispatch, myId, params.user_id])

  const handleEditButton = () => {
    setIsEditMode(true)
  }

  return (
    <>
      <ProfilePage handleEditButton={handleEditButton} />
      {isEditMode && (
        <ModalWindow setIsFormVisible={setIsEditMode}>
          <EditProfileModeContainer setIsEditModeFormVisible={setIsEditMode} />
        </ModalWindow>
      )}
    </>
  )
}
