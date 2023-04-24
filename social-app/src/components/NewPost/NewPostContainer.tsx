import React from 'react'
import { addPost, updateNewPostText } from '../../redux/action-creator'
import { NewPost } from './NewPost'
import { MyContext } from '../../redux/context'

export const NewPostContainer = () => {
  return (
    <MyContext.Consumer>
      {(store) => {
        const updateNewPost = (newTextPost: string): void => {
          store && store.dispatch(updateNewPostText(newTextPost))
        }
        const addNewPost = (): void => {
          store && store.dispatch(addPost())
        }
        return <NewPost addNewPost={addNewPost} updateNewPost={updateNewPost} />
      }}
    </MyContext.Consumer>
  )
}
