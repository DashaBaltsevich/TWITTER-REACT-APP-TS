import React from 'react'
import { ProfilePage } from './ProfilePage'
import { connect } from 'react-redux'
import { PostType, StateTypes, UserProfileType } from '../../types'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  followUserThunkCreator,
  getUserProfileThunkCreator,
  unFollowUserThunkCreator,
  updateProfileThunkCreator,
  updateStatusThunkCreator
} from '../../redux/thunk-creator'
import { EditProfileModeContainer, ModalWindow } from '../../components'
import { EditProfileValuesType } from '../../components/EditProfileMode/EditProfileMode'
import { setIsMyFriend } from '../../redux/action-creator'

interface PropsType {
  profile: UserProfileType | null
  myId?: number
  getUserProfileThunkCreator: (userId: number) => void
  updateStatusThunkCreator: (newStatus: string) => void
  updateProfileThunkCreator: (
    newProfileInformation: EditProfileValuesType
  ) => void
  followUserThunkCreator: (userId: number) => void
  unFollowUserThunkCreator: (userId: number) => void
  setIsMyFriend: (isMyFriend: boolean) => void
  router: {
    location: any
    navigate: any
    params: any
  }
  posts: PostType[]
  status: string | null
  isMyFriend: boolean
}

class ProfilePageAPIContainer extends React.Component<PropsType> {
  state = {
    isEditMode: false
  }

  componentDidMount(): void {
    let userId = this.props.router.params.user_id || this.props?.myId || 29063
    this.props.getUserProfileThunkCreator(userId)
  }

  handleEditButton = () => {
    this.setState({
      isEditMode: true
    })
  }

  setIsEditModeFormVisible = (isEditMode: boolean) => {
    this.setState({ isEditMode: isEditMode })
  }

  render() {
    return (
      <>
        <ProfilePage
          profile={this.props.profile}
          updateStatusThunkCreator={this.props.updateStatusThunkCreator}
          posts={this.props.posts}
          status={this.props.status}
          isMyProfile={this.props.myId === 29063}
          isEditMode={this.state.isEditMode}
          handleEditButton={this.handleEditButton}
          isMyFriend={this.props.isMyFriend}
          followUserThunkCreator={this.props.followUserThunkCreator}
          unFollowUserThunkCreator={this.props.unFollowUserThunkCreator}
          setIsMyFriend={this.props.setIsMyFriend}
        />
        {this.state.isEditMode && (
          <ModalWindow setIsFormVisible={this.setIsEditModeFormVisible}>
            <EditProfileModeContainer
              profile={this.props.profile}
              setIsEditModeFormVisible={this.setIsEditModeFormVisible}
              updateProfileThunkCreator={this.props.updateProfileThunkCreator}
            />
          </ModalWindow>
        )}
      </>
    )
  }
}

const mapStateToProps = (
  state: StateTypes
): {
  profile: UserProfileType | null
  posts: PostType[]
  status: string | null
  isMyFriend: boolean
} => {
  return {
    profile: state.userProfilePage.profile,
    posts: state.userProfilePage.posts,
    status: state.userProfilePage.status,
    isMyFriend: state.userProfilePage.isMyFriend
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
  getUserProfileThunkCreator,
  updateStatusThunkCreator,
  updateProfileThunkCreator,
  followUserThunkCreator,
  unFollowUserThunkCreator,
  setIsMyFriend
})(ProfilePageAPIContainerWithRouter)
