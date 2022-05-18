import React from 'react'
import Main from './Main'
import Filter from '../Filter'
import { Container } from './style'

export const HomeComponent = () => {
  return (
    <Container>
      <Filter />
      <Main />
      
    </Container>
  )
}

export default HomeComponent