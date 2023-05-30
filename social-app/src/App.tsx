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
import { connect } from 'react-redux'
import { StateTypes, UserDataType, UserInformationType } from './types'
import {
  authorizationThunkCreator,
  logInThunkCreator,
  logOutThunkCreator
} from './redux/thunk-creator'
import { LoginDataType } from './pages/LogInPage/LogInPage'

interface PropsType {
  userInformation: UserDataType | null
  isAuthorized: boolean
  authorizationThunkCreator: () => void
  logInThunkCreator: (
    values: LoginDataType,
    setIsLoginFormVisible: (isLoginFormVisible: boolean) => void
  ) => void
  logOutThunkCreator: () => void
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
    this.props.logOutThunkCreator()
  }

  async componentDidMount(): Promise<void> {
    try {
      await this.props.authorizationThunkCreator()
    } catch (err) {
      console.log(err)
    }
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
          <ModalWindow setIsLoginFormVisible={this.setIsLoginFormVisible}>
            <LogInPageContainer
              setIsLoginFormVisible={this.setIsLoginFormVisible}
              logInThunkCreator={this.props.logInThunkCreator}
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
  authorizationThunkCreator,
  logInThunkCreator,
  logOutThunkCreator
})(AppAPI)

export default App
