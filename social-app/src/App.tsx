import React from 'react'
import AppStyles from './App.module.scss'
import { NavBar } from './components'
import {
  HomePage,
  ProfilePageContainer,
  MessagesPage,
  UsersContainer
} from './pages'
import { Routes, Route } from 'react-router-dom'

export const URL = 'https://social-network.samuraijs.com/api/1.0'

const App = (): JSX.Element => {
  return (
    <div className={AppStyles.container}>
      <NavBar />
      <div className={AppStyles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/*" element={<ProfilePageContainer />} />
          <Route path="/dialog/*" element={<MessagesPage />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
