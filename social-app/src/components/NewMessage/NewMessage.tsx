import React from 'react'
import * as Yup from 'yup'
import { BiSend } from 'react-icons/bi'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import NewMessageStyles from './NewMessage.module.scss'

const validationPostSchema = Yup.object({
  text: Yup.string().required().min(4, 'Must be more than 4 characters')
})

type NewMassageType = {
  newMessage: string
}

export const NewMessage = () => {
  const initialValues: NewMassageType = {
    newMessage: ''
  }
  const addMessage = ({ newMessage }: NewMassageType) => {
    console.log(newMessage)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationPostSchema}
      validateOnBlur={false}
      onSubmit={addMessage}
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
              minRows={4}
              maxRows={8}
              autoResize={true}
              // onInput={() => {}}
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
