import { combineReducers, createStore, applyMiddleware } from 'redux'
import { messagesReducer } from './messages-reducer'
import { usersReducer } from './users-reducer'
import { userProfileReducer } from './profile-reducer'
import { authReducer } from './auth-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const reducers = combineReducers({
  userProfilePage: userProfileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer
})
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)

//@ts-ignore
window.store = store.getState()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
