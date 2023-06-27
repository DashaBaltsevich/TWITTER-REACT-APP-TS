import React from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as yup from 'yup'
import styles from './LogInPage.module.scss'
import Logo from '../../assets/logo.svg'

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
  // captcha: yup.string().required('Captcha is required')
})

export interface LoginDataType {
  email: string
  password: string
  rememberMe: boolean
  captcha?: null | string
}

export const LogInPage = ({
  login
}: {
  login: (values: LoginDataType, setStatus: (status: object) => void) => void
}) => {
  const initialValues: LoginDataType = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: ''
  }
  // const [captchaUrl, setCaptchaUrl] = useState(null)
  // useEffect(() => {
  //   authAPI.captcha().then((response) => {
  //     setCaptchaUrl(response.data.url)
  //   })
  // }, [])

  return (
    <section className={styles.s__login}>
      <div className={styles.s__login_title_wrap}>
        <h2 className={styles.s__login_title}>LogIn</h2>
        <img src={Logo} alt="logo" />
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, submitProps) => {
          const result: LoginDataType = {
            email: values.email,
            password: values.password,
            rememberMe: values.rememberMe
          }
          if (values.captcha?.trim() !== '') {
            result.captcha = values.captcha
          }
          login(result, submitProps.setStatus)
          console.log(values)
          // submitProps.resetForm()
        }}
        validateOnBlur={false}
        validationSchema={validationSchema}
      >
        {({ values, status }) => (
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
                  <p className={styles.f__login_field_error}>{children}</p>
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
                  <p className={styles.f__login_field_error}>{children}</p>
                )}
              />
            </div>
            <div
              className={`${styles.f__login_row} + ${styles.f__login_row_checkbox}`}
            >
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
            {status?.captcha && (
              <div className={styles.f__login_row}>
                <img src={status.captcha} alt="captcha" />
                <br />
                <Field
                  type="text"
                  id="captcha"
                  name="captcha"
                  className={styles.f__login_field}
                />
              </div>
            )}
            {status?.error && (
              <div className={styles.f__login_error}>{status.error}</div>
            )}
            <button type="submit" className={styles.f__login_btn_submit}>
              Войти
            </button>
          </Form>
        )}
      </Formik>
    </section>
  )
}
