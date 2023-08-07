import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Users } from './Users'

describe('Users component', () => {
  const users = [
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
  ]
  const handleFollowButtonMock = jest.fn()
  const showMoreNotFriendsMock = jest.fn()

  it('should component renders', () => {
    render(
      <BrowserRouter>
        <Users
          users={users}
          handleFollowButton={handleFollowButtonMock}
          showMoreNotFriends={showMoreNotFriendsMock}
        />
      </BrowserRouter>
    )
    expect(screen.getByText('You might like')).toBeInTheDocument()

    const userList = screen.getByRole('list')
    const userItems = screen.getAllByRole('listitem')
    expect(userList).toBeInTheDocument()
    expect(userItems.length).toBe(users.length)
  })
  it('calls handleFollowButton when follow button is clicked', () => {
    render(
      <BrowserRouter>
        <Users
          users={users}
          handleFollowButton={handleFollowButtonMock}
          showMoreNotFriends={showMoreNotFriendsMock}
        />
      </BrowserRouter>
    )

    const followButton = screen.getByText('Follow')
    fireEvent.click(followButton)
    expect(handleFollowButtonMock).toHaveBeenCalledTimes(1)
  })

  it('calls showMoreNotFriendsMock when Show More button is clicked', () => {
    render(
      <BrowserRouter>
        <Users
          users={users}
          handleFollowButton={handleFollowButtonMock}
          showMoreNotFriends={showMoreNotFriendsMock}
        />
      </BrowserRouter>
    )

    const followButton = screen.getByText('Show More')
    fireEvent.click(followButton)
    expect(showMoreNotFriendsMock).toHaveBeenCalledTimes(1)
  })

  it('scrolls to the bottom when users change', () => {})
})
