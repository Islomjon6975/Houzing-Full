import React from 'react'
import Main from './Main'
import Filter from '../Filter'
import { Container } from './style'
import { Recommended } from './Recomented'
import Choose from './Choose'
import { Categories } from './Categories'
import PopularHouse from './PopularHouse'
import { RecentProperties } from './RecentProperties'


export const HomeComponent = () => {
  return (
    <Container>
      <Filter />
      <Main />
      <Recommended />
      <Choose />
      <Categories />
      <PopularHouse />
      <RecentProperties />
    </Container>
  )
}

export default HomeComponent