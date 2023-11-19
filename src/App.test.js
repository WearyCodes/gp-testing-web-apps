import {render, screen} from '@testing-library/react'
import React from 'react'
import App from './App'

test('Render without errors', () => {
    render(<App />)
})
test('When app mounts, Add New Animal header is on screen', () => {
    render(<App />);

    const header = screen.getByText(/add new animal/i)

    expect(header).toBeVisible()
})