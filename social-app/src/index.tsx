import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

let rerender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          addPost={store.addPost.bind(store)}
          onPostChange={store.onPostChange.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  )
}

rerender()

store.subscribe(rerender)
