import React from 'react'
import { ProfilePage } from './ProfilePage'
import axios from 'axios'
import { URL } from '../../App'
import { connect } from 'react-redux'
import { StateTypes, UserProfilePageType } from '../../types'
import { setUserProfile } from '../../redux/action-creator'

interface PropsType {
  profile: UserProfilePageType
  setUserProfile: (profile: UserProfilePageType) => void
}

class ProfilePageAPIContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    axios
      .get(`${URL}/profile/2`)
      .then((response) => this.props.setUserProfile(response.data))
  }
  render() {
    return <ProfilePage profile={this.props.profile} />
  }
}

const mapStateToProps = (
  state: StateTypes
): { profile: UserProfilePageType } => {
  return {
    profile: state.userProfilePage
  }
}

export const ProfilePageContainer = connect(mapStateToProps, {
  setUserProfile
})(ProfilePageAPIContainer)
