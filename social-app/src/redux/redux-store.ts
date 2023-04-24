import { combineReducers, createStore } from 'redux'
import { StoreTypes } from '../types'
import { messagesReducer } from './messages-reducer'
import { postsReducer } from './posts-reducer'

export const reducers = combineReducers({
  postsPage: postsReducer,
  messagesPage: messagesReducer
})
export const store: StoreTypes = createStore(reducers)
