import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ColMD4, Card, CardBody, ImgCard, MoreInfoButton } from './styles'

/**
 * UserCard component
 * @param {object} props.movie Movie object
 */
const MovieCard = ({ movie }) => (
  <ColMD4>
    <Card alt={`Card of ${movie.title}`}>
      <ImgCard
        className={`starwarts-movie-image-${movie.episode_id}`}
        title={movie.title}
        alt={movie.title}
      />
      <CardBody>
        <h1>{movie.title}</h1>
        <Link
          to={{
            pathname: '/movie-info',
            state: {
              movie
            }
          }}
        >
          <MoreInfoButton>MORE INFO</MoreInfoButton>
        </Link>
      </CardBody>
    </Card>
  </ColMD4>
)

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieCard
