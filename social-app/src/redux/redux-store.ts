import { combineReducers, createStore } from 'redux'
import { messagesReducer } from './messages-reducer'
import { postsReducer } from './posts-reducer'

export const reducers = combineReducers({
  postsPage: postsReducer,
  messagesPage: messagesReducer
})
export const store = createStore(reducers)

export type RootState = ReturnType<typeof store.getState>
