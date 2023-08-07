import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Dialogs } from './Dialogs'
import * as reduxHooks from '../../hooks'
import { BrowserRouter } from 'react-router-dom'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))

const data = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B'
  }
]

describe('Dialogs component without state', () => {
  it('renders Dialogs component without list', () => {
    render(<Dialogs />)
    expect(screen.getByText('Messages')).toBeInTheDocument()
    const dialogList = screen.queryByRole('list')
    expect(dialogList).toBeNull()
  })
})

describe('Dialogs component with state', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {})
    useSelectorMock.mockImplementation((selector) => selector(mockStore))
  })
  afterEach(() => {
    useDispatchMock.mockClear()
    useSelectorMock.mockClear()
  })

  const useSelectorMock = reduxHooks.useAppSelector as jest.Mock
  const useDispatchMock = reduxHooks.useAppDispatch as jest.Mock

  const mockStore = {
    messagesPage: {
      dialogUsers: data
    }
  }

  it('renders Dialogs component', () => {
    render(
      <BrowserRouter>
        <Dialogs />
      </BrowserRouter>
    )
    expect(screen.getByText('Messages')).toBeInTheDocument()
    const dialogList = screen.getByRole('list')
    expect(dialogList).toBeInTheDocument()
  })
  it('renders Dialogs with list from useSelector', () => {
    render(
      <BrowserRouter>
        <Dialogs />
      </BrowserRouter>
    )
    const dialogItems = screen.getAllByRole('listitem')
    expect(dialogItems).toHaveLength(data.length)
    expect(screen.getByText('A')).toBeInTheDocument()
  })
  it('active link styles in Dialogs', () => {
    render(
      <BrowserRouter>
        <Dialogs />
      </BrowserRouter>
    )

    fireEvent.click(screen.getByText('A'))
    expect(screen.getByText('A')).toHaveClass('l__dialogs_item_link_active')
    expect(screen.getByText('B')).toHaveClass('l__dialogs_item_link')

    fireEvent.click(screen.getByText('B'))
    expect(screen.getByText('B')).toHaveClass('l__dialogs_item_link_active')
    expect(screen.getByText('A')).toHaveClass('l__dialogs_item_link')
  })
})
