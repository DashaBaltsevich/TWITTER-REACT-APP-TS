import React from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as yup from 'yup'
import styles from './LogInPage.module.scss'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required')
    .max(30, 'Are you really sure that your email is that big?'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Must be more than 4 characters')
})

export interface LoginDataType {
  email: string
  password: string
  rememberMe: boolean
}

export const LogInPage = ({
  login
}: {
  login: (values: LoginDataType) => void
}) => {
  const initialValues: LoginDataType = {
    email: '',
    password: '',
    rememberMe: false
  }
  const handleSubmitForm = (values: LoginDataType) => {
    login(values)
  }
  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmitForm(values)}
        // onReset={}
        validateOnBlur={false}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form className={styles.f__login}>
            <div className={styles.f__login_row}>
              <label htmlFor="email" className={styles.f__login_field_label}>
                Почта:
              </label>
              <br />
              <Field
                type="email"
                id="email"
                name="email"
                className={styles.f__login_field}
                value={values.email}
              />
              <ErrorMessage
                name="email"
                component={({ children }: any) => (
                  <p className="f-login__field-error">{children}</p>
                )}
              />
            </div>
            <div className={styles.f__login_row}>
              <label htmlFor="password" className={styles.f__login_field_label}>
                Пароль:
              </label>
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                className={styles.f__login_field}
                value={values.password}
              />
              <ErrorMessage
                name="password"
                component={({ children }: any) => (
                  <p className="f-login__field-error">{children}</p>
                )}
              />
            </div>
            <div className={styles.f__login_row}>
              <label
                htmlFor="rememberMe"
                className={styles.f__login_field_label}
              >
                Запомнить пароль
              </label>
              <br />
              <Field
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className={styles.f__login_field}
              />
            </div>
            <button type="submit" className={styles.f__login_btn_submit}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
