import { render, screen } from '@testing-library/react'
import React from 'react'
import { UserPosts } from './UserPosts'
import * as reduxHooks from '../../hooks'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('UserPost component', () => {
  const useSelectorMock = reduxHooks.useAppSelector as jest.Mock
  const useDispatchMock = reduxHooks.useAppDispatch as jest.Mock
  const mockStore = {
    userProfilePage: { posts: [{ id: 1, post: '111', likeCount: 1 }] }
  }
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore))
    useDispatchMock.mockImplementation(() => () => {})
  })
  afterEach(() => {
    useDispatchMock.mockClear()
    useSelectorMock.mockClear()
  })
  test('renders component', () => {
    render(<UserPosts />)
    expect(screen.getByText('111')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(
      mockStore.userProfilePage.posts.length
    )
  })
})
