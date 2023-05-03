import { combineReducers, createStore } from 'redux'
import { messagesReducer } from './messages-reducer'
import { postsReducer } from './posts-reducer'
import { usersReducer } from './users-reducer'

export const reducers = combineReducers({
  postsPage: postsReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer
})
export const store = createStore(reducers)

//@ts-ignore
window.store = store.getState()

export type RootState = ReturnType<typeof store.getState>
