// import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { LogInPage } from './LogInPage'

interface PropsType {}

class LogInPageAPIContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    // axios
    //   .get(`${URL}/profile/${userId}`)
    //   .then((response) => this.props.setUserProfile(response.data))
  }
  render() {
    return <LogInPage />
  }
}

export const LogInPageContainer = connect()(LogInPageAPIContainer)
