import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { LogInPage, LoginDataType } from './LogInPage'
import { URL } from '../../App'

interface PropsType {
  setIsLoginFormVisible: (isVisible: boolean) => void
  setAuthorizationState: (isAuthorized: boolean) => void
}

class LogInPageAPIContainer extends React.Component<PropsType> {
  login = (values: LoginDataType) => {
    axios
      .post(`${URL}/auth/login`, {
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setAuthorizationState(true)
          this.props.setIsLoginFormVisible(false)
          console.log(response)
        }
      })
  }
  render() {
    return <LogInPage login={this.login} />
  }
}

export const LogInPageContainer = connect()(LogInPageAPIContainer)
