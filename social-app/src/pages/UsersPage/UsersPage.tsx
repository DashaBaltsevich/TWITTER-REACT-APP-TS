import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ActionTypes, StateTypes, UserType, UsersPageType } from '../../types'
import { followUser, setUsers, unFollowUser } from '../../redux/action-creator'
import { Friends, Users } from '../../components'
import styles from './UsersPage.module.scss'

const UsersPage = ({
  users,
  followUser,
  unFollowUser,
  setUsers
}: {
  users: UserType[]
  followUser: (id: number) => void
  unFollowUser: (id: number) => void
  setUsers: (users: UserType[]) => void
}) => {
  useEffect(() => {
    if (users.length === 0) {
      setUsers([
        {
          id: 1,
          name: 'abc',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU',
          followed: true,
          status: 'svsd',
          location: {
            country: 'Belarus',
            city: 'Minsk'
          }
        },
        {
          id: 2,
          name: 'Sasha',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU',
          followed: false,
          status: 'dfvdf',
          location: {
            country: 'Russia',
            city: 'Moscow'
          }
        },
        {
          id: 3,
          name: 'Masha',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU',
          followed: true,
          status: 'srsr',
          location: {
            country: 'Ukraine',
            city: 'Kiev'
          }
        }
      ])
    }
  }, [setUsers, users.length])

  return (
    <section className={styles.s__users}>
      <Friends
        users={users}
        followUser={followUser}
        unFollowUser={unFollowUser}
      />
      <Users
        users={users}
        followUser={followUser}
        unFollowUser={unFollowUser}
      />
    </section>
  )
}

const mapStateToProps = (state: StateTypes): UsersPageType => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
  return {
    followUser: (id: number) => {
      dispatch(followUser(id))
    },
    unFollowUser: (id: number) => {
      dispatch(unFollowUser(id))
    },
    setUsers: (users: UserType[]) => {
      dispatch(setUsers(users))
    }
  }
}

export const UsersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage)
