import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from '../MovieCard'
import ErrorWarning from '../ErrorWarning'

/**
 * MoviesList component
 * @param {array} props.movies Array of movies objects
 */
const MoviesList = ({ movies }) =>
  movies.length > 0 ? (
    movies
      .sort((a, b) => a.episode_id - b.episode_id)
      .map(movie => <MovieCard key={movie.episode_id} movie={movie} />)
  ) : (
    <ErrorWarning data-testid="movies-not-found">There's no movies available</ErrorWarning>
  )

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MoviesList
