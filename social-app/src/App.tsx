import React from 'react'
import AppStyles from './App.module.scss'
import { NavBar } from './components'
import { HomePage, ProfilePage, MessagesPage } from './pages'
import { Routes, Route } from 'react-router-dom'
import { StateTypes } from './types'

const App = ({
  state,
  addPost,
  onPostChange
}: {
  state: StateTypes
  addPost: () => void
  onPostChange: (newText: string) => void
}): JSX.Element => {
  return (
    <div className={AppStyles.container}>
      <NavBar />
      <div className={AppStyles.content}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                postsPage={state.postsPage}
                addPost={addPost}
                onPostChange={onPostChange}
              />
            }
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/dialog/*"
            element={<MessagesPage messagesPage={state.messagesPage} />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
