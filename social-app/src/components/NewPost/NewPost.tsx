import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Avatar from '../../assets/avatar.png'
import NewPostStyles from './NewPost.module.scss'

const validationPostSchema = Yup.object({
  text: Yup.string().required().min(4, 'Must be more than 4 characters')
})

type InitialValue = {
  text: string
}

export const NewPost = ({
  addPost,
  updateNewPostText
}: {
  addPost: () => void
  updateNewPostText: (newTextPost: string) => void
}) => {
  const initialValues: InitialValue = { text: '' }

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNewPostText(e.target.value)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationPostSchema}
      validateOnBlur={false}
      onSubmit={(values, { resetForm }) => {
        addPost()
        console.log(values)
        resetForm()
      }}
    >
      {({ values }) => (
        <Form className={NewPostStyles.f__post}>
          <div className={NewPostStyles.f__post_content}>
            <img src={Avatar} alt="avatar" />
            <Field
              id="text"
              name="text"
              as="textarea"
              className={NewPostStyles.f__post_field}
              value={values.text}
              placeholder="What is new?"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => onInput(e)}
            />
            <ErrorMessage
              name="text"
              children={(errorMessage: string): React.ReactNode => (
                <p className={NewPostStyles.f__post_field_error}>
                  {errorMessage}
                </p>
              )}
            />
          </div>
          <button type="submit" className={NewPostStyles.btn__post}>
            Tweet
          </button>
        </Form>
      )}
    </Formik>
  )
}
