import React from 'react'
import { connect } from 'react-redux'
import { LogInPage, LoginDataType } from './LogInPage'
import { authAPI } from '../../api/api'

interface PropsType {
  setIsLoginFormVisible: (isVisible: boolean) => void
  setAuthorizationState: (isAuthorized: boolean) => void
}

class LogInPageAPIContainer extends React.Component<PropsType> {
  login = (values: LoginDataType) => {
    authAPI.login(values).then((response) => {
      if (response.data.resultCode === 0) {
        this.props.setAuthorizationState(true)
        this.props.setIsLoginFormVisible(false)
      }
    })
  }
  render() {
    return <LogInPage login={this.login} />
  }
}

export const LogInPageContainer = connect()(LogInPageAPIContainer)
