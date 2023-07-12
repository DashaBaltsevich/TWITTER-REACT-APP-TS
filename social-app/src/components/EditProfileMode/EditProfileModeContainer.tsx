import React from 'react'
import { EditProfileMode, EditProfileValuesType } from './EditProfileMode'
import { updateProfileThunkCreator } from '../../redux/thunk-creator'
import { useAppDispatch } from '../../hooks'

export const EditProfileModeContainer = ({
  setIsEditModeFormVisible
}: {
  setIsEditModeFormVisible: (isEditModeFormVisible: boolean) => void
}) => {
  const dispatch = useAppDispatch()
  const onSubmit = (
    values: EditProfileValuesType,
    setStatus: (status: object) => void
  ) => {
    dispatch(
      updateProfileThunkCreator(values, setStatus, setIsEditModeFormVisible)
    )
  }
  return (
    <>
      <EditProfileMode onSubmit={onSubmit} />
    </>
  )
}
