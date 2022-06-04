import React from 'react'
import { Container, Description, Subtitle, Title, Wrapper } from './style'

export const Map = () => {
  return (
    <Container>
        <Title>Location</Title>
        <Wrapper>
            <Wrapper>
                <Subtitle>Address:</Subtitle>
                <Description>329 Queensberry Street</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>City:</Subtitle>
                <Description>Jersey City</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Area:</Subtitle>
                <Description>Greenville</Description>
            </Wrapper>
        </Wrapper>
        <Wrapper mt={24}>
            <Wrapper>
                <Subtitle>State/County: </Subtitle>
                <Description>Washington</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Zip:</Subtitle>
                <Description>365448</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Country:</Subtitle>
                <Description>United States</Description>
            </Wrapper>
        </Wrapper>
    </Container>
  )
}

export default Map