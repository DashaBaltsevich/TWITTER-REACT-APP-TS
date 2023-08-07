import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { UserPrevue } from './UserPrevue'

describe('UsePrevue component', () => {
  const user = {
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
  test('renders component with user props', () => {
    render(
      <BrowserRouter>
        <UserPrevue user={user} />
      </BrowserRouter>
    )
    expect(screen.getByText('ABC')).toBeInTheDocument()
    expect(screen.getByText('no status')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
    )
  })
  test('should be status shown', () => {
    const userWithStatus = {
      ...user,
      status: 'status'
    }
    render(
      <BrowserRouter>
        <UserPrevue user={userWithStatus} />
      </BrowserRouter>
    )
    expect(screen.getByText(`${userWithStatus.status}`)).toBeInTheDocument()
  })
  test('should be small user image shown', () => {
    const userWithImage = {
      ...user,
      photos: {
        small: 'http://image/photo.png',
        large: null
      }
    }
    render(
      <BrowserRouter>
        <UserPrevue user={userWithImage} />
      </BrowserRouter>
    )
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      `${userWithImage.photos.small}`
    )
  })

  test('should navigate to the correct URL when the NavLink is clicked', async () => {
    render(
      <BrowserRouter>
        <UserPrevue user={user} />
      </BrowserRouter>
    )
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/profile/${user.id}`
    )

    fireEvent.click(screen.getByRole('link'))
    expect(window.location.pathname).toBe(`/profile/${user.id}`)
  })
})
