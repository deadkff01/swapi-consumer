import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import MovieInfo from './components/MovieInfo'

/**
 * Routes handler component
 */
const Routes = () => (
  <main>
    <Switch>
      <Route path="/main-page" component={Main} />
      <Route path="/movie-info" component={MovieInfo} />
      <Route path="*" component={Main} />
      <Route path="/" component={Main} />
    </Switch>
  </main>
)

export default Routes
