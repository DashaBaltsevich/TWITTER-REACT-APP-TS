import React from 'react'
import { EditProfileMode, EditProfileValuesType } from './EditProfileMode'
import { UserProfileType } from '../../types'

interface PropsTypes {
  profile: UserProfileType | null
  updateProfileThunkCreator: (
    newProfileInformation: EditProfileValuesType
  ) => void
  setIsEditModeFormVisible: (isEditModeFormVisible: boolean) => void
}

export class EditProfileModeContainer extends React.Component<PropsTypes> {
  onSubmit = (values: EditProfileValuesType) => {
    this.props.updateProfileThunkCreator(values)
    this.props.setIsEditModeFormVisible(false)
  }
  render() {
    return (
      <>
        <EditProfileMode
          profile={this.props.profile}
          onSubmit={this.onSubmit}
        />
      </>
    )
  }
}

// const mapStateToProps = (state: StateTypes) => {
//   return {
//     profile: state.userProfilePage.profile
//   }
// }

// export const EditProfileModeContainer = connect(mapStateToProps, {
//   updateProfileThunkCreator
// })(EditProfileModeContainerAPI)
