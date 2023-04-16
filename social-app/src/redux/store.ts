import { StoreTypes } from '../types'

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
  rerender() {},
  addPost(): void {
    const newPost = {
      id: 5,
      post: this._state.postsPage.newText,
      likeCount: 3
    }
    this._state.postsPage.posts.push(newPost)
    this.rerender()
  },
  onPostChange(newText: string): void {
    this._state.postsPage.newText = newText
    this.rerender()
  },
  subscribe(observer: () => void) {
    this.rerender = observer
  }
}
