import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { Friends } from './Friends'
import { BrowserRouter } from 'react-router-dom'

describe('Friends component', () => {
  const data = {
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
    currentPage: 1
  }
  const handleUnfollowButton = jest.fn()
  const handlePagination = jest.fn()
  it('get list from props', () => {
    render(
      <BrowserRouter>
        <Friends
          friends={data}
          handleUnfollowButton={handleUnfollowButton}
          handlePagination={handlePagination}
        />
      </BrowserRouter>
    )
    expect(screen.getByText('Friends')).toBeInTheDocument()
    const usersList = screen.getAllByTestId('user')
    expect(usersList).toHaveLength(data.users.length)
  })
  it('click on UnFollow Button', () => {
    render(
      <BrowserRouter>
        <Friends
          friends={data}
          handleUnfollowButton={handleUnfollowButton}
          handlePagination={handlePagination}
        />
      </BrowserRouter>
    )
    const unFollowButton = screen.getByText('Unfollow')
    fireEvent.click(unFollowButton)
    expect(handleUnfollowButton).toHaveBeenCalled()
  })
  it('click on pagination', () => {
    render(
      <BrowserRouter>
        <Friends
          friends={data}
          handleUnfollowButton={handleUnfollowButton}
          handlePagination={handlePagination}
        />
      </BrowserRouter>
    )
    const paginationNumber = screen.getByText('1')
    fireEvent.click(paginationNumber)
    expect(handlePagination).toHaveBeenCalled()
  })
  it('right pagination numbers', () => {
    render(
      <BrowserRouter>
        <Friends
          friends={data}
          handleUnfollowButton={handleUnfollowButton}
          handlePagination={handlePagination}
        />
      </BrowserRouter>
    )
    const paginationList = screen.getAllByTestId('paginationNumber')
    const paginationNumber = Math.ceil(data.totalUsersCount / data.pageSize)
    expect(paginationList.length).toBe(paginationNumber)
  })
})
