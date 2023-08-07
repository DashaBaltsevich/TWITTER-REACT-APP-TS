import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { FriendsContainer } from './FriendsContainer'
import * as reduxHooks from '../../hooks'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('FriendsContainer component with mock state', () => {
  const useSelectorMock = reduxHooks.useAppSelector as jest.Mock
  const useDispatchMock = reduxHooks.useAppDispatch as jest.Mock

  const mockStore = {
    usersPage: {
      friends: {
        users: [
          {
            id: 1,
            name: 'ABC',
            uniqueUrlName: null,
            photos: {
              small: null,
              large: null
            },
            followed: true,
            status: null
          }
        ],
        pageSize: 5,
        totalUsersCount: 15,
        currentPage: 1,
        isLoading: false
      }
    }
  }

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {})
    useSelectorMock.mockImplementation((selector) => selector(mockStore))
  })
  afterEach(() => {
    useDispatchMock.mockClear()
    useSelectorMock.mockClear()
  })
  it('renders FriendsContainer', () => {
    render(
      <BrowserRouter>
        <FriendsContainer />
      </BrowserRouter>
    )
    expect(screen.getByText('Friends')).toBeInTheDocument()
    const usersList = screen.getAllByTestId('user')
    expect(usersList).toHaveLength(mockStore.usersPage.friends.users.length)
  })
  it('dispatch on unfollow button click', () => {
    render(
      <BrowserRouter>
        <FriendsContainer />
      </BrowserRouter>
    )
    const unFollowButton = screen.getByText('Unfollow')
    fireEvent.click(unFollowButton)
    expect(useDispatchMock).toHaveBeenCalled()
  })

  it('renders FriendsContainer with preloader', () => {
    const mockStore = {
      usersPage: {
        friends: {
          users: [],
          pageSize: 5,
          totalUsersCount: 15,
          currentPage: 1,
          isLoading: true
        }
      }
    }
    useSelectorMock.mockImplementation((selector) => selector(mockStore))
    render(
      <BrowserRouter>
        <FriendsContainer />
      </BrowserRouter>
    )
    expect(screen.getByAltText('preloader')).toBeInTheDocument()
  })
})
