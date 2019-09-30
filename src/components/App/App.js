import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../Routes'
import Container from '../Common/Container'
import Header from '../Common/Header'

/**
 * Aplication main wrapper.
 */
const App = () => (
  <BrowserRouter>
    <Header>SWAPI Consumer</Header>
    <Container>
      <Routes />
    </Container>
  </BrowserRouter>
)

export default App
