import React from 'react'
import { render, cleanup } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import moment from 'moment'
import MovieInfo from './MovieInfo'
import allMovies from '../../__mocks__/mockMovies'

const MovieInfoComponent = props => (
  <BrowserRouter>
    <MovieInfo {...props} />
  </BrowserRouter>
)

describe('Main component', () => {
  afterEach(cleanup)

  it('renders the component', () => {
    const mockLocation = { location: { state: { movie: allMovies[0] } } }
    const container = render(<MovieInfoComponent {...mockLocation} />)
    expect(container).toMatchSnapshot()
  })

  test('test movie properties', () => {
    const mockLocation = { location: { state: { movie: allMovies[0] } } }
    const { getByTestId } = render(<MovieInfoComponent {...mockLocation} />)
    expect(getByTestId('movie-image')).toBeDefined()
    expect(getByTestId('movie-title').textContent).toBe(allMovies[0].title)
    expect(getByTestId('movie-director').textContent).toBe(allMovies[0].director)
    expect(getByTestId('movie-producers').textContent).toBe(allMovies[0].producer)
    expect(getByTestId('movie-release-date').textContent).toBe(
      moment(allMovies[0].release_date).format('DD/MM/YYYY')
    )
  })
})
