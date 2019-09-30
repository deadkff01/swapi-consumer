import React from 'react'
import Main from './Main'
import { render } from '@testing-library/react'

it('renders the component', () => {
  const container = render(<Main />)
  expect(container).toMatchSnapshot()
})
