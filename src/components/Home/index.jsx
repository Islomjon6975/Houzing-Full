import React from 'react'
import Main from './Main'
import Filter from '../Filter'
import { Container } from './style'
import { Recommended } from './Recomented'

export const HomeComponent = () => {
  return (
    <Container>
      <Filter />
      <Main />
      <Recommended />
    </Container>
  )
}

export default HomeComponent