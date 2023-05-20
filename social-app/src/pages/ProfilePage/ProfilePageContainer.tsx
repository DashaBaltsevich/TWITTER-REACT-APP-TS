import React from 'react'
import { ProfilePage } from './ProfilePage'
import { connect } from 'react-redux'
import { StateTypes, UserProfilePageType } from '../../types'
import { setUserProfile } from '../../redux/action-creator'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { profileAPI } from '../../api/api'

interface PropsType {
  profile: UserProfilePageType
  myId?: number
  setUserProfile: (profile: UserProfilePageType) => void
  router: {
    location: any
    navigate: any
    params: any
  }
}

class ProfilePageAPIContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    let userId = this.props.router.params.user_id || this.props?.myId || 29063
    profileAPI
      .getUserProfile(userId)
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

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>
  params: Record<string, string>
  navigate: ReturnType<typeof useNavigate>
}

const withRouter = (Component: typeof ProfilePageAPIContainer) => {
  function ComponentWithRouterProp(props: PropsType) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

const ProfilePageAPIContainerWithRouter = withRouter(ProfilePageAPIContainer)

export const ProfilePageContainer = connect(mapStateToProps, {
  setUserProfile
})(ProfilePageAPIContainerWithRouter)
