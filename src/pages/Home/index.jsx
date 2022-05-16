import React from 'react'
import Main from '../../components/Home/Main'
import Filter from '../../components/Filter'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Main />
    </Container>
  )
}

export default Home