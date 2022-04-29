import { render, screen } from '@testing-library/react'
import Header from '.'

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByRole('img').getAttribute('alt')).toBe('Habit Tracker')
    expect(screen.getByRole('link', { name: 'Home' }))
    expect(screen.getByRole('link', { name: 'Habits' }))
    expect(screen.getByText('Habit Tracker'))
  })
})
