import React from 'react'
import Main from './Main'
import Filter from '../Filter'
import { Container } from './style'
import Card from '../Card'

export const HomeComponent = () => {
  return (
    <Container>
      <Filter />
      <Main />
      <Card />
    </Container>
  )
}

export default HomeComponent