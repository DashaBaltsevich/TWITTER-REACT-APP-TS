import { StoreTypes, TypeAction } from '../types'

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
      ]
    }
  },

  getState() {
    return this._state
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    switch (action.type) {
      case TypeAction.ADD_POST:
        const newPost = {
          id: 5,
          post: this._state.postsPage.newText,
          likeCount: 3
        }
        this._state.postsPage.posts.push(newPost)
        this._callSubscriber()
        break
      case TypeAction.UPDATE_NEW_POST_TEXT:
        this._state.postsPage.newText = action.text ? action.text : ''
        this._callSubscriber()
        break
    }
  }
}
