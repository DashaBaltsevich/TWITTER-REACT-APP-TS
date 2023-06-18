import { Field, Form, Formik } from 'formik'
import React from 'react'
import { UserProfileType } from '../../types'
import styles from './EditProfileModule.module.scss'

interface PropsTypes {
  profile: UserProfileType | null
  onSubmit: (values: EditProfileValuesType) => void
}

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

export class EditProfileMode extends React.Component<PropsTypes> {
  initialValues: EditProfileValuesType = {
    aboutMe: this.props.profile?.aboutMe || '',
    lookingForAJob: this.props.profile?.lookingForAJob || false,
    lookingForAJobDescription:
      this.props.profile?.lookingForAJobDescription || '',
    fullName: this.props.profile?.fullName || '',
    contacts: {
      github: this.props.profile?.contacts.github || '',
      vk: this.props.profile?.contacts.vk || '',
      facebook: this.props.profile?.contacts.facebook || '',
      instagram: this.props.profile?.contacts.instagram || '',
      twitter: this.props.profile?.contacts.twitter || '',
      website: this.props.profile?.contacts.website || '',
      youtube: this.props.profile?.contacts.youtube || '',
      mainLink: this.props.profile?.contacts.mainLink || ''
    }
  }
  render() {
    return (
      <div className={styles.s__edit_mode}>
        <Formik
          initialValues={this.initialValues}
          onSubmit={(values) => {
            this.props.onSubmit(values)
          }}
          // validationSchema={}
          enableReinitialize={true}
        >
          {({ values, handleChange }) => (
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
              {this.props.profile &&
                Object.keys(this.props.profile.contacts).map((el, i) => (
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
                      value={(el ?? values.contacts[el]) || ''}
                      onChange={handleChange}
                    />
                  </div>
                ))}
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
