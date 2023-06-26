import React from 'react'
import { connect } from 'react-redux'
import { LogInPage, LoginDataType } from './LogInPage'
import { logInThunkCreator } from '../../redux/thunk-creator'

interface PropsType {
  logInThunkCreator: (
    values: LoginDataType,
    setIsLoginFormVisible: (isLoginFormVisible: boolean) => void,
    setStatus: (status: object) => void
  ) => void
  setIsLoginFormVisible: (isLoginFormVisible: boolean) => void
}

class LogInPageAPIContainer extends React.Component<PropsType> {
  login = (values: LoginDataType, setStatus: (status: object) => void) => {
    this.props.logInThunkCreator(
      values,
      this.props.setIsLoginFormVisible,
      setStatus
    )
  }
  render() {
    return <LogInPage login={this.login} />
  }
}

export const LogInPageContainer = connect(null, { logInThunkCreator })(
  LogInPageAPIContainer
)
