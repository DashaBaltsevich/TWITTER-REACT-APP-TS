import { StateTypes } from '../types'

let rerender = () => {}

export const state: StateTypes = {
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
}

export const addPost = (): void => {
  const newPost = {
    id: 5,
    post: state.postsPage.newText,
    likeCount: 3
  }
  state.postsPage.posts.push(newPost)
  rerender()
}

export const onPostChange = (newText: string): void => {
  state.postsPage.newText = newText
  rerender()
}

export const subscribe = (observer: () => void) => {
  rerender = observer
}
