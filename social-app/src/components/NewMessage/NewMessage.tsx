import React from 'react'
import * as Yup from 'yup'
import { BiSend } from 'react-icons/bi'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import NewMessageStyles from './NewMessage.module.scss'

const validationPostSchema = Yup.object({
  newMessage: Yup.string().required().min(4, 'Must be more than 4 characters')
})

type NewMassageType = {
  newMessage: string
}

export const NewMessage = ({
  onSubmitNewMessage
}: {
  onSubmitNewMessage: (values: NewMassageType) => void
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
        onSubmitNewMessage(values)
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
