import { render, screen } from '@testing-library/react'
import React from 'react'
import { NewMessage } from './NewMessage'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('New Message component', () => {
  const onSubmitNewMessageMock = jest.fn()
  test('renders component', async () => {
    render(
      <BrowserRouter>
        <NewMessage onSubmitNewMessage={onSubmitNewMessageMock} />
      </BrowserRouter>
    )

    const input = screen.getByPlaceholderText('New Message')
    const submitButton = screen.getByRole('button')

    expect(input).toBeInTheDocument()

    userEvent.type(input, 'AAA')
    userEvent.click(submitButton)

    await screen.findByText('AAA')

    await expect(onSubmitNewMessageMock).toHaveBeenCalled()
  })
})
