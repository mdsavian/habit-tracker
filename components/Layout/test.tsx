import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from '.'

describe('Layout', () => {
  it('should render header and children', () => {
    render(
      <Layout>
        <h1>Test Layout</h1>
      </Layout>,
    )
    expect(screen.getByRole('img').getAttribute('alt')).toBe('Habit Tracker')
    expect(
      screen.getByRole('heading', { name: /Test Layout/i }),
    ).toBeInTheDocument()
  })
})
