import React from 'react'
import * as Yup from 'yup'
import { BiSend } from 'react-icons/bi'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import NewMessageStyles from './NewMessage.module.scss'
import { ActionTypes } from '../../types'
import { updateNewMessageText, addMessage } from '../../redux/action-creator'

const validationPostSchema = Yup.object({
  newMessage: Yup.string().required().min(4, 'Must be more than 4 characters')
})

type NewMassageType = {
  newMessage: string
}

export const NewMessage = ({
  dispatch
}: {
  dispatch: (action: ActionTypes) => void
}) => {
  const initialValues: NewMassageType = {
    newMessage: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationPostSchema}
      validateOnBlur={false}
      onSubmit={(values, { resetForm }) => {
        dispatch(addMessage())
        console.log(values)
        resetForm()
      }}
    >
      {({ values }) => (
        <Form className={NewMessageStyles.f__message}>
          <div className={NewMessageStyles.f__message_content}>
            <Field
              id="newMessage"
              name="newMessage"
              as="textarea"
              className={NewMessageStyles.f__message_field}
              value={values.newMessage}
              placeholder="New Message"
              rows={1}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                dispatch(updateNewMessageText(e.target.value))
              }}
            />
            <ErrorMessage
              name="text"
              children={(errorMessage: string): React.ReactNode => (
                <p className="f-post__field-error">{errorMessage}</p>
              )}
            />
            <button type="submit" className={NewMessageStyles.btn__message}>
              <BiSend />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
