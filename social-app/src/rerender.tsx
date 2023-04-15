import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { addPost, onPostChange } from './redux/state'
import { StateTypes } from './types'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

export const rerender = ({ state }: { state: StateTypes }) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} onPostChange={onPostChange} />
      </BrowserRouter>
    </React.StrictMode>
  )
}
