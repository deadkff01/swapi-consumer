import React, { useState, useEffect } from 'react'
import baseService from '../../services/baseService'
import Row from '../Common/Row'
import MoviesList from '../Common/MoviesList'
import Loader from '../Common/Loader'
import ErrorWarning from '../Common/ErrorWarning'

/**
 * Main component
 */
const Main = () => {
  const [isLoading, setIsloading] = useState(true)
  const [movies, setMovies] = useState([])
  const [requestError, setRequestError] = useState(false)

  const getMovies = async () => {
    try {
      const response = await baseService().get('films')
      const { results } = response.data
      setMovies(results)
      setIsloading(false)
    } catch {
      setIsloading(false)
      setRequestError(true)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  if (requestError) {
    return (
      <ErrorWarning data-testid="component-error">
        Error, verify your conection or reload the page! may the force be with you!
      </ErrorWarning>
    )
  }

  return (
    <div data-testid="component-main">
      {isLoading ? (
        <Loader data-testid="loading" />
      ) : (
        <Row data-testid="resolved">
          <MoviesList movies={movies} />
        </Row>
      )}
    </div>
  )
}

export default Main
