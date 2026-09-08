import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'
import App from './App'

afterEach(cleanup)

describe('Stockly landing page', () => {
  test('renders the required sections and pricing tiers', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Every item accounted for.',
    )
    expect(screen.getByRole('heading', { name: /less time reconciling/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /plans for each stage/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: /tell us how your shop works/i })).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Basic' })).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Business' })).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Entrepreneur' })).toBeVisible()
  })

  test('opens and closes the login dialog', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Login' }))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('open')

    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(dialog).not.toHaveAttribute('open')
  })

  test('closes the dialog when the browser sends a cancel event', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Login' }))
    const dialog = screen.getByRole('dialog')
    fireEvent(dialog, new Event('cancel', { bubbles: true, cancelable: true }))

    expect(dialog).not.toHaveAttribute('open')
  })

  test('handles the contact form without a backend request', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Name'), 'Alex')
    await user.type(
      screen.getByLabelText('Email', { selector: '#contact input' }),
      'alex@example.com',
    )
    await user.type(screen.getByLabelText('Message'), 'I want to learn more.')
    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(screen.getByRole('status')).toHaveTextContent('does not send data')
  })
})
