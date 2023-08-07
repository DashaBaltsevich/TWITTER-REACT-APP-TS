import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { UsersContainer } from './UsersContainer'
import * as reduxHooks from '../../hooks'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('UsersContainer', () => {
  const mockStore = {
    usersPage: {
      notFriends: {
        users: [
          {
            id: 1,
            name: 'ABC',
            uniqueUrlName: null,
            photos: {
              small: null,
              large: null
            },
            followed: false,
            status: null
          }
        ],
        pageSize: 10,
        scrollHeight: 100,
        currentPage: 1,
        isLoading: false
      }
    }
  }
  const useSelectorMock = reduxHooks.useAppSelector as jest.Mock
  const useDispatchMock = reduxHooks.useAppDispatch as jest.Mock
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {})
  })
  afterEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })
  it('should render Users component when not loading', () => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore))
    render(
      <BrowserRouter>
        <UsersContainer />
      </BrowserRouter>
    )

    expect(screen.getAllByRole('listitem')).toHaveLength(
      mockStore.usersPage.notFriends.users.length
    )
  })
  it('should render Users component when loading', () => {
    const mockStoreWithLoading = {
      usersPage: {
        notFriends: {
          ...mockStore.usersPage.notFriends,
          isLoading: true
        }
      }
    }
    useSelectorMock.mockImplementation((selector) =>
      selector(mockStoreWithLoading)
    )
    render(
      <BrowserRouter>
        <UsersContainer />
      </BrowserRouter>
    )

    expect(screen.queryByText('You might like')).not.toBeInTheDocument()
    expect(screen.queryByRole('list')).not.toBeInTheDocument()
  })
  it('should dispatch when follow button clicked', () => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore))
    render(
      <BrowserRouter>
        <UsersContainer />
      </BrowserRouter>
    )
    const button = screen.getByText('Follow')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(useDispatchMock).toHaveBeenCalled()
  })
})
