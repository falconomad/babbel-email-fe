import { render, screen } from '@testing-library/react'
import React from 'react'
import AppCard from './Card'


describe('AppCard', () => {
  it('should render Appcard', () => {
    render(
      <AppCard
      />,
    )

    const emailImage = screen.getByAltText('email-image')
    expect(emailImage).toBeVisible()

    const nameLabel = screen.getByText('Full Name')
    expect(nameLabel).toBeInTheDocument()

    const domainLabel = screen.getByText('Company Domain')
    expect(domainLabel).toBeInTheDocument()

  })
})
