import { render, screen } from '@testing-library/react'
import React from 'react'
import * as reduxHooks from '../../hooks'
import { BrowserRouter } from 'react-router-dom'
import { Messages } from './Messages'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

describe('Messages component with mock state', () => {
  const useSelectorMock = reduxHooks.useAppSelector as jest.Mock
  const useDispatchMock = reduxHooks.useAppDispatch as jest.Mock

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {})
  })
  afterEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })
  it('renders Messages component with mock state messages', () => {
    const mockStore = {
      messagesPage: {
        messages: [
          {
            id: 1,
            text: '111'
          }
        ]
      }
    }
    useSelectorMock.mockImplementation((selector) => selector(mockStore))
    render(
      <BrowserRouter>
        <Messages />
      </BrowserRouter>
    )
    expect(screen.getByText('111')).toBeInTheDocument()
    expect(screen.getByAltText('avatar')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(
      mockStore.messagesPage.messages.length
    )
  })
  it('renders Messages component with mock state empty messages', () => {
    const mockStore = {
      messagesPage: {
        messages: []
      }
    }
    useSelectorMock.mockImplementation((selector) => selector(mockStore))
    render(
      <BrowserRouter>
        <Messages />
      </BrowserRouter>
    )
    expect(screen.queryByText('111')).toBeNull()
    expect(screen.queryAllByRole('listitem')).toHaveLength(
      mockStore.messagesPage.messages.length
    )
  })
})
