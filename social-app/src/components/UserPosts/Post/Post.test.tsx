import { render, screen } from '@testing-library/react'
import React from 'react'
import { Posts } from './Post'

describe('Post component', () => {
  test('renders component', () => {
    const name = 'ABC'
    const posts = [{ id: 1, post: '123', likeCount: 1 }]
    render(<Posts name={name} posts={posts} />)
    expect(screen.getByText('123')).toBeInTheDocument()
    expect(screen.getByText('@ABC')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(posts.length)
  })
})
