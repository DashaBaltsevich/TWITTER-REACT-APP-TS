import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux/redux-store'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { MyContext } from './redux/context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

let rerender = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <MyContext.Provider value={store}>
          <App />
        </MyContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

rerender()

store.subscribe(rerender)
