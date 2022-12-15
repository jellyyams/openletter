import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders link on landing page', () => {
    render(<App />)
    const linkElement = screen.getByText(/the github repo/i)
    expect(linkElement).toBeInTheDocument()
})
