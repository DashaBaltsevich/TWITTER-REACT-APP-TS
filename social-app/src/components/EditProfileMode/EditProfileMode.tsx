import { Field, Form, Formik } from 'formik'
import React from 'react'
import { StateTypes, UserProfileType } from '../../types'
import styles from './EditProfileModule.module.scss'
import { useSelector } from 'react-redux'
export interface EditProfileValuesType {
  aboutMe: string | null
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  contacts: {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
  }
}

export const EditProfileMode = ({
  onSubmit
}: {
  onSubmit: (
    values: EditProfileValuesType,
    setStatus: (status: object) => void
  ) => void
}): JSX.Element => {
  const profile: UserProfileType | null = useSelector(
    (state: StateTypes) => state.userProfilePage.profile
  )

  const initialValues: EditProfileValuesType = {
    aboutMe: profile?.aboutMe || '',
    lookingForAJob: profile?.lookingForAJob || false,
    lookingForAJobDescription: profile?.lookingForAJobDescription || '',
    fullName: profile?.fullName || '',
    contacts: {
      github: profile?.contacts.github || '',
      vk: profile?.contacts.vk || '',
      facebook: profile?.contacts.facebook || '',
      instagram: profile?.contacts.instagram || '',
      twitter: profile?.contacts.twitter || '',
      website: profile?.contacts.website || '',
      youtube: profile?.contacts.youtube || '',
      mainLink: profile?.contacts.mainLink || ''
    }
  }

  return (
    <div className={styles.s__edit_mode}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, submitProps) => {
          onSubmit(values, submitProps.setStatus)
        }}
        // validationSchema={}
        enableReinitialize={true}
      >
        {({ values, handleChange, status }) => (
          <Form className={styles.f__edit_mode}>
            <div className={styles.s__edit_mode_title_wrap}>
              <h2 className={styles.s__edit_mode_title}>Edit profile</h2>
              <button type="submit" className={styles.f__edit_mode_button}>
                Save
              </button>
            </div>
            <div className={styles.f__edit_mode_field_row}>
              <label
                htmlFor="fullName"
                className={styles.f__edit_mode_field_label}
              >
                Name:
              </label>
              <br />
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className={styles.f__edit_mode_field}
                value={values.fullName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.f__edit_mode_field_row}>
              <label
                htmlFor="aboutMe"
                className={styles.f__edit_mode_field_label}
              >
                About Me:
              </label>
              <br />
              <Field
                type="text"
                id="aboutMe"
                name="aboutMe"
                className={styles.f__edit_mode_field}
                value={values.aboutMe}
                onChange={handleChange}
              />
            </div>
            <div className={styles.f__edit_mode_field_row}>
              <p>Looking for a job?</p>
              <Field
                type="checkbox"
                id="checkbox"
                name="lookingForAJob"
                className={styles.f__edit_mode_field}
              />
              <label
                htmlFor="checkbox"
                className={styles.f__edit_mode_field_label_checkbox}
              ></label>
            </div>
            <div className={styles.f__edit_mode_field_row}>
              <label
                htmlFor="lookingForAJobDescription"
                className={styles.f__edit_mode_field_label}
              >
                Description:
              </label>
              <br />
              <Field
                type="text"
                id="lookingForAJobDescription"
                name="lookingForAJobDescription"
                className={styles.f__edit_mode_field}
                value={values.lookingForAJobDescription ?? ''}
                onChange={handleChange}
              />
            </div>
            <h3>Contacts</h3>
            {status?.error && (
              <div className={styles.f__edit_mode_error}>{status.error}</div>
            )}
            {profile &&
              Object.keys(profile.contacts).map((element, i) => {
                const el = element as keyof typeof profile.contacts
                return (
                  <div className={styles.f__edit_mode_field_row} key={i}>
                    <label
                      htmlFor={`${el}`}
                      className={styles.f__edit_mode_field_label}
                    >
                      {`${el[0].toUpperCase() + el.slice(1)}:`}
                    </label>
                    <br />
                    <Field
                      type="text"
                      id={`${el}`}
                      name={`contacts.${el}`}
                      className={styles.f__edit_mode_field}
                      value={values.contacts?.[el] || ''}
                      onChange={handleChange}
                    />
                  </div>
                )
              })}
          </Form>
        )}
      </Formik>
    </div>
  )
}
