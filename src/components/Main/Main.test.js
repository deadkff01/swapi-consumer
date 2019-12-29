import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import moxios from 'moxios'
import Main from './Main'
import allMovies from '__mocks__/mockMovies'

const MainComponent = (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

it('renders the component', async () => {
  moxios.install()
  const { getByTestId } = render(MainComponent)
  moxios.wait(() => {
    const request = moxios.requests.mostRecent()
    request.respondWith({
      status: 200,
      response: { results: allMovies }
    })
  })

  await waitForElement(() => getByTestId('resolved'))
  expect(getByTestId('component-main')).toMatchSnapshot()
})
