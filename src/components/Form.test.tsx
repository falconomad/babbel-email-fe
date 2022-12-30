import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import { FORM_MESSAGES, FORM_LABELS } from '../utils/contants'
import EmailForm from './Form'


describe('AppCard', () => {
  it('should render Form', async () => {
    render(
      <EmailForm
      />,
    )

    const nameLabel = screen.getByText(FORM_LABELS.NAME)
    expect(nameLabel).toBeInTheDocument()

    const domainLabel = screen.getByText(FORM_LABELS.DOMAIN)
    expect(domainLabel).toBeInTheDocument()

  })

  it('should show validation error if tried to generate email without filling either one of the inputs', async () => {
    render(
      <EmailForm
      />,
    )

    const generateButton = screen.getByRole('button', { name: /Generate Email/i })
    expect(generateButton).toBeEnabled()

    fireEvent.click(generateButton)

    const errorMessage = await screen.findByText(FORM_MESSAGES.DOMAIN)
    expect(errorMessage).toBeInTheDocument()

  })

  it('should show generated email address when valid name and  domain are given', async () => {
    //babbel-email-service should be running at port 8080
    render(
      <EmailForm
      />,
    )

    const nameInput = screen.getByPlaceholderText(FORM_MESSAGES.NAME) as HTMLInputElement

    fireEvent.change(nameInput, { target: { value: 'Appu Cyriac' } })
    expect(nameInput.value).toBe('Appu Cyriac')


    const domainInput = screen.getByPlaceholderText(FORM_MESSAGES.DOMAIN) as HTMLInputElement

    fireEvent.change(domainInput, { target: { value: 'lendis.com' } })
    expect(domainInput.value).toBe('lendis.com')

    const generateButton = screen.getByRole('button', { name: /Generate Email/i })
    expect(generateButton).toBeEnabled()

    fireEvent.click(generateButton)

    const emailId = await screen.findByText('appu.cyriac@lendis.com')
    expect(emailId).toBeInTheDocument()

  })

  it('should correctly display the email id by using firstname and lastname when the name contains a middlename', async () => {
    //babbel-email-service should be running at port 8080
    render(
      <EmailForm
      />,
    )

    const nameInput = screen.getByPlaceholderText(FORM_MESSAGES.NAME) as HTMLInputElement

    fireEvent.change(nameInput, { target: { value: 'Appu Middlename Cyriac' } })
    expect(nameInput.value).toBe('Appu Middlename Cyriac')


    const domainInput = screen.getByPlaceholderText(FORM_MESSAGES.DOMAIN) as HTMLInputElement

    fireEvent.change(domainInput, { target: { value: 'lendis.com' } })
    expect(domainInput.value).toBe('lendis.com')


    const generateButton = screen.getByRole('button', { name: /Generate Email/i })
    expect(generateButton).toBeEnabled()

    fireEvent.click(generateButton)

    const emailId = await screen.findByText('appu.cyriac@lendis.com')
    expect(emailId).toBeInTheDocument()

  })

  it('should show an error if invalid name is entered', async () => {
    //babbel-email-service should be running at port 8080
    render(
      <EmailForm
      />,
    )

    const nameInput = screen.getByPlaceholderText(FORM_MESSAGES.NAME) as HTMLInputElement

    fireEvent.change(nameInput, { target: { value: 'Appu%$##' } })
    expect(nameInput.value).toBe('Appu%$##')


    const errorMessage = await screen.findByText(FORM_MESSAGES.INVALID_NAME)
    expect(errorMessage).toBeInTheDocument()
  })

  it('should show an error if invalid name is entered', async () => {
    //babbel-email-service should be running at port 8080
    render(
      <EmailForm
      />,
    )

    const domainInput = screen.getByPlaceholderText(FORM_MESSAGES.DOMAIN) as HTMLInputElement

    fireEvent.change(domainInput, { target: { value: 'http://www.google.com' } })
    expect(domainInput.value).toBe('http://www.google.com')


    const errorMessage = await screen.findByText(FORM_MESSAGES.INVALID_DOMAIN)
    expect(errorMessage).toBeInTheDocument()
  })
})
