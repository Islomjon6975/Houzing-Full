import React from 'react'
import { Address, Advanced, Box, Container, Inputt, Position, Price, Search, Status, Wrapper } from './style'
import { SearchOutlined } from '@ant-design/icons';

export const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <Position>
          <Address />
          <Inputt  size="large" placeholder="Enter an address, neighborhood, city, or ZIP code"  />
        </Position>
          <Status><Status.Icon />Status</Status>
          <Status><Price />Price</Status>
          <Status><Advanced />Advanced</Status>
          <Search type="primary" icon={<SearchOutlined />} size="large">
          Search
        </Search>
        
      </Wrapper>
    </Container>
  )
}

export default Settings;