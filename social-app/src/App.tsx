import React from 'react'
import AppStyles from './App.module.scss'
import { NavBar } from './components'
import { HomePage, ProfilePage, MessagesPage } from './pages'
import { Routes, Route } from 'react-router-dom'
import { StateTypes, ActionTypes } from './types'

const App = ({
  state,
  dispatch
}: {
  state: StateTypes
  dispatch: (action: ActionTypes) => void
}): JSX.Element => {
  return (
    <div className={AppStyles.container}>
      <NavBar />
      <div className={AppStyles.content}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage postsPage={state.postsPage} dispatch={dispatch} />
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/dialog/*"
            element={
              <MessagesPage
                messagesPage={state.messagesPage}
                dispatch={dispatch}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
