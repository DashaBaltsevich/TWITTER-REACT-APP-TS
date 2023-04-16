import React from 'react'
import ReactDOM from 'react-dom/client'
import { state, subscribe } from './redux/state'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { addPost, onPostChange } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

let rerender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} onPostChange={onPostChange} />
      </BrowserRouter>
    </React.StrictMode>
  )
}

rerender()

subscribe(rerender)
