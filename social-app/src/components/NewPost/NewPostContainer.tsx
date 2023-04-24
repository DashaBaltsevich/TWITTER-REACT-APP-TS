import React from 'react'
import { ActionTypes } from '../../types'
import { addPost, updateNewPostText } from '../../redux/action-creator'
import { NewPost } from './NewPost'

export const NewPostContainer = ({
  dispatch
}: {
  dispatch: (action: ActionTypes) => void
}) => {
  const updateNewPost = (newTextPost: string): void => {
    dispatch(updateNewPostText(newTextPost))
  }
  const addNewPost = (): void => {
    dispatch(addPost())
  }

  return <NewPost addNewPost={addNewPost} updateNewPost={updateNewPost} />
}
