import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import moment from 'moment'
import { MovieCard, ImgCard, Field, BackButton } from './styles'
import MovieTitle from '../Common/MovieTitle'

const MovieInfo = ({ location }) => {
  if (!location.state) {
    return <Redirect data-testid="redirect-movie-card" to="/" />
  }

  const { movie } = location.state

  return (
    <MovieCard data-testid="movie-card">
      <Link to="/">
        <BackButton className="back-arrow-icon">Back to home</BackButton>
      </Link>
      <ImgCard
        data-testid="movie-image"
        className={`starwarts-movie-image-${movie.episode_id}`}
        title={movie.title}
        alt={movie.title}
      />
      <MovieTitle data-testid="movie-title">{movie.title}</MovieTitle>
      <Field>
        Director: <span data-testid="movie-director">{movie.director}</span>
      </Field>
      <Field>
        Producers: <span data-testid="movie-producers">{movie.producer}</span>
      </Field>
      <Field>
        Release date:
        <span data-testid="movie-release-date">
          {moment(movie.release_date).format('DD/MM/YYYY')}
        </span>
      </Field>
    </MovieCard>
  )
}

export default MovieInfo
