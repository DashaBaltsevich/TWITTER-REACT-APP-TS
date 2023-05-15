import React, { ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({
  isAllowed,
  redirectUrl = '/',
  children
}: {
  isAllowed: boolean
  redirectUrl?: string
  children: ReactElement
}) => {
  return isAllowed ? children : <Navigate to={redirectUrl} />
}
