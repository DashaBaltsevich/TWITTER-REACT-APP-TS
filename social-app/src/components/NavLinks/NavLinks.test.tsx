import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavLinks } from './NavLinks'

describe('NavLinks component', () => {
  const setIsLoginFormVisible = jest.fn()
  const handleLogOut = jest.fn()
  it('renders component with isAuthorized: true', () => {
    render(
      <BrowserRouter>
        <NavLinks
          isAuthorized={true}
          setIsLoginFormVisible={setIsLoginFormVisible}
          handleLogOut={handleLogOut}
        />
      </BrowserRouter>
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(5)
    expect(screen.getByText('Messages')).toBeInTheDocument()
    expect(screen.getByText('LogOut')).toBeInTheDocument()
    expect(screen.queryByText('LogIn')).not.toBeInTheDocument()
  })
  it('should display a confirmation message when logOut clicked and if ok handleLogOut calls', () => {
    const confirmSpy = jest.spyOn(window, 'confirm')
    confirmSpy.mockImplementation(jest.fn(() => true))
    render(
      <BrowserRouter>
        <NavLinks
          isAuthorized={true}
          setIsLoginFormVisible={setIsLoginFormVisible}
          handleLogOut={handleLogOut}
        />
      </BrowserRouter>
    )
    const logOutButton = screen.getByText('LogOut')
    expect(logOutButton).toBeInTheDocument()
    fireEvent.click(logOutButton)

    expect(confirmSpy).toHaveBeenCalled()
    expect(handleLogOut).toHaveBeenCalled()

    confirmSpy.mockRestore()
  })
  it('should display a confirmation message when logOut clicked and if not ok handleLogOut doesn`t call', () => {
    const confirmSpy = jest.spyOn(window, 'confirm')
    confirmSpy.mockImplementation(jest.fn(() => false))
    render(
      <BrowserRouter>
        <NavLinks
          isAuthorized={true}
          setIsLoginFormVisible={setIsLoginFormVisible}
          handleLogOut={handleLogOut}
        />
      </BrowserRouter>
    )
    const logOutButton = screen.getByText('LogOut')
    expect(logOutButton).toBeInTheDocument()
    fireEvent.click(logOutButton)

    expect(confirmSpy).toHaveBeenCalled()
    expect(handleLogOut).not.toHaveBeenCalled()

    confirmSpy.mockRestore()
  })
  it('renders component with isAuthorized: false', () => {
    render(
      <BrowserRouter>
        <NavLinks
          isAuthorized={false}
          setIsLoginFormVisible={setIsLoginFormVisible}
          handleLogOut={handleLogOut}
        />
      </BrowserRouter>
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.queryByText('Messages')).not.toBeInTheDocument()
    expect(screen.getByText('LogIn')).toBeInTheDocument()
    expect(screen.queryByText('LogOut')).not.toBeInTheDocument()
  })
  it('should setIsLoginFormVisible calls on click logIn', () => {
    render(
      <BrowserRouter>
        <NavLinks
          isAuthorized={false}
          setIsLoginFormVisible={setIsLoginFormVisible}
          handleLogOut={handleLogOut}
        />
      </BrowserRouter>
    )
    const logInButton = screen.getByText('LogIn')
    fireEvent.click(logInButton)
    expect(setIsLoginFormVisible).toHaveBeenCalled()
  })
})
