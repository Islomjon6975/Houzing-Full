import React from 'react'
import { Container } from './style'
import { HomeComponent } from '../../components/Home'
import MyProperties from '../../components/MyProperties'

export const Home = () => {
  return (
    <Container>
      <HomeComponent />
      <MyProperties />
    </Container>
  )
}

export default Home