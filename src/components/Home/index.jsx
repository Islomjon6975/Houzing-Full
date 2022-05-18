import React from 'react'
import Main from './Main'
import Filter from '../Filter'
import { Container } from './style'
import { Recommended } from './Recomented'
import Choose from './Choose'

export const HomeComponent = () => {
  return (
    <Container>
      <Filter />
      <Main />
      <Recommended />
      <Choose />
    </Container>
  )
}

export default HomeComponent