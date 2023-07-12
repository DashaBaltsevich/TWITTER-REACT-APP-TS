import React from 'react'
import { LogInPage, LoginDataType } from './LogInPage'
import { logInThunkCreator } from '../../redux/thunk-creator'
import { useAppDispatch } from '../../hooks'

export const LogInPageContainer = ({
  setIsLoginFormVisible
}: {
  setIsLoginFormVisible: (isLoginFormVisible: boolean) => void
}) => {
  const dispatch = useAppDispatch()
  const login = (
    values: LoginDataType,
    setStatus: (status: object) => void
  ) => {
    dispatch(logInThunkCreator(values, setIsLoginFormVisible, setStatus))
  }

  return <LogInPage login={login} />
}
