import { StoreTypes } from '../types'
import { messagesReducer } from './messages-reducer'
import { postsReducer } from './posts-reducer'

export const store: StoreTypes = {
  _state: {
    postsPage: {
      posts: [
        {
          id: 1,
          post: 'abc',
          likeCount: 12
        },
        {
          id: 2,
          post: 'ahbc',
          likeCount: 2
        },
        {
          id: 3,
          post: 'abfc',
          likeCount: 1
        }
      ],
      newText: ''
    },
    messagesPage: {
      messages: [
        {
          id: 1,
          text: '123'
        },
        {
          id: 2,
          text: '12d3'
        },
        {
          id: 3,
          text: '1dsd23'
        }
      ],
      dialogUsers: [
        {
          id: 1,
          name: 'Sasha'
        },
        {
          id: 2,
          name: 'Masha'
        }
      ],
      newMessageText: ''
    }
  },

  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.postsPage = postsReducer(this._state.postsPage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._callSubscriber()
  }
}
