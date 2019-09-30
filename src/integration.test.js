import React from 'react'
import Main from './components/Main'
import moxios from 'moxios'
import allMovies from './__mocks__/mockMovies'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup, waitForElement } from '@testing-library/react'

const MainComponent = (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

describe('Main component', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
    cleanup()
  })

  test('testing error request', async () => {
    const { getByTestId } = render(MainComponent)
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: { message: 'Error message 400' }
      })
    })

    expect(getByTestId('loading')).toBeDefined()
    const resolvedSpan = await waitForElement(() => getByTestId('component-error'))
    expect(resolvedSpan).toBeDefined()
  })

  test('making movies request', async () => {
    const { getByTestId } = render(MainComponent)
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { results: allMovies }
      })
    })

    expect(getByTestId('loading')).toBeDefined()
    const resolvedSpan = await waitForElement(() => getByTestId('resolved'))
    expect(resolvedSpan.children.length).toBe(7)
  })

  test('test one movie', async () => {
    const { getByTestId } = render(MainComponent)
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { results: [allMovies[1]] }
      })
    })

    expect(getByTestId('loading')).toBeDefined()
    const resolvedSpan = await waitForElement(() => getByTestId('resolved'))
    expect(resolvedSpan.children.length).toBe(1)
  })

  test('test without movies', async () => {
    const { getByTestId } = render(MainComponent)
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: { results: [] }
      })
    })

    expect(getByTestId('loading')).toBeDefined()
    const resolvedSpan = await waitForElement(() => getByTestId('resolved'))
    expect(resolvedSpan.children.length).toBe(1)
    expect(getByTestId('movies-not-found')).toBeDefined()
  })
})
