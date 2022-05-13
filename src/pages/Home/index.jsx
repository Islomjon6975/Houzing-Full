import React from 'react'
import Main from '../../components/Home/Main'
import Settings from '../../components/Home/Settings'
import { Container } from './style'

export const Home = () => {
  return (
    <Container>
      <Settings />
      <Main />
    </Container>
  )
}

export default Home