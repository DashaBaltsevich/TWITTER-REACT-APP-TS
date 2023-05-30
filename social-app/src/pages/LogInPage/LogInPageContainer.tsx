import React from 'react'
import { connect } from 'react-redux'
import { LogInPage, LoginDataType } from './LogInPage'

interface PropsType {
  logInThunkCreator: (
    values: LoginDataType,
    setIsLoginFormVisible: (isLoginFormVisible: boolean) => void
  ) => void
  setIsLoginFormVisible: (isLoginFormVisible: boolean) => void
}

class LogInPageAPIContainer extends React.Component<PropsType> {
  login = (values: LoginDataType) => {
    this.props.logInThunkCreator(values, this.props.setIsLoginFormVisible)
  }
  render() {
    return <LogInPage login={this.login} />
  }
}

export const LogInPageContainer = connect()(LogInPageAPIContainer)
