import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should render correctly', () => {
    render(<Header />)

    // todo
    // expect img habit
    // expect link to home

    expect(screen.getByText('Habit Tracker'))
  })
})
