import React from 'react'
import AppStyles from './App.module.scss'
import { NavBar } from './components'
import { HomePage, ProfilePage, MessagesPage } from './pages'
import { Routes, Route } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <div className={AppStyles.container}>
      <NavBar />
      <div className={AppStyles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dialog/*" element={<MessagesPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
