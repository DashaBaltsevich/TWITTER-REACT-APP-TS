import React from 'react'
import AppStyles from './App.module.scss'
import { ModalWindow, NavBar, PrivateRoute } from './components'
import {
  HomePage,
  ProfilePageContainer,
  MessagesPage,
  UsersPageContainer,
  LogInPageContainer
} from './pages'
import { Routes, Route } from 'react-router-dom'
import { WithRouterProps } from './pages/ProfilePage/ProfilePageContainer'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  setAuthorizationState,
  setUserInformation
} from './redux/action-creator'
import { StateTypes, UserDataType, UserInformationType } from './types'

export const URL = 'https://social-network.samuraijs.com/api/1.0'

interface PropsType {
  userInformation: UserDataType | null
  isAuthorized: boolean
  setUserInformation: (userInformation: UserDataType | null) => void
  setAuthorizationState: (isAuthorized: boolean) => void
}

interface StateType {
  isLoginFormVisible: boolean
}
class AppAPI extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
    this.state = {
      isLoginFormVisible: false
    }
    this.setIsLoginFormVisible = this.setIsLoginFormVisible.bind(this)
  }

  setIsLoginFormVisible = (isVisible: boolean): void => {
    this.setState({ isLoginFormVisible: isVisible })
  }

  handleLogOut = (): void => {
    axios.delete(`${URL}/auth/login`).then((response) => {
      if (response.data.resultCode === 0) {
        this.props.setUserInformation(null)
        this.props.setAuthorizationState(false)
      }
    })
  }

  async componentDidMount(): Promise<void> {
    try {
      await axios
        .get(`${URL}/auth/me`, {
          withCredentials: true
        })
        .then((response) => {
          if (response.data.resultCode === 0) {
            this.props.setUserInformation(response.data.data)
            this.props.setAuthorizationState(true)
          }
        })
    } catch (err) {
      console.log(err)
    }

    console.log(this.props.isAuthorized)
  }

  render() {
    return (
      <div className={AppStyles.container}>
        <NavBar
          isAuthorized={this.props.isAuthorized}
          setIsLoginFormVisible={this.setIsLoginFormVisible}
          handleLogOut={this.handleLogOut}
        />
        <div className={AppStyles.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute isAllowed={this.props.isAuthorized}>
                  <ProfilePageContainer
                    router={{} as WithRouterProps}
                    myId={this.props.userInformation?.id}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile/:user_id"
              element={<ProfilePageContainer router={{} as WithRouterProps} />}
            />
            <Route
              path="/dialog/*"
              element={
                <PrivateRoute isAllowed={this.props.isAuthorized}>
                  <MessagesPage />
                </PrivateRoute>
              }
            />

            <Route
              path="/users"
              element={
                <PrivateRoute isAllowed={this.props.isAuthorized}>
                  <UsersPageContainer isAuthorized={this.props.isAuthorized} />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        {this.state.isLoginFormVisible && (
          <ModalWindow>
            <LogInPageContainer
              setIsLoginFormVisible={this.setIsLoginFormVisible}
              setAuthorizationState={this.props.setAuthorizationState}
            />
          </ModalWindow>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state: StateTypes): UserInformationType => {
  return {
    userInformation: state.auth.userInformation,
    isAuthorized: state.auth.isAuthorized
  }
}

const App = connect(mapStateToProps, {
  setUserInformation,
  setAuthorizationState
})(AppAPI)

export default App
