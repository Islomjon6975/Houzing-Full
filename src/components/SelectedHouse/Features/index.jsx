import React from 'react'
import { Container, Title, Wrapper, Icons, Subtitle } from './style'

export const Features = () => {
  return (
    <Container>
        <Title>Features</Title>
        <Wrapper>
            <Wrapper.Col>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Airconditioner />
                    </Icons.Wrapper>
                    <Subtitle>Air Conditioning</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Barbecue />
                    </Icons.Wrapper>
                    <Subtitle>Barbeque</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Dryer />
                    </Icons.Wrapper>
                    <Subtitle>Dryer</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Gym />
                    </Icons.Wrapper>
                    <Subtitle>Gym</Subtitle>
                </Wrapper.Box>
            </Wrapper.Col>
            <Wrapper.Col>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Grass />
                    </Icons.Wrapper>
                    <Subtitle>Lawn</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Laundry />
                    </Icons.Wrapper>
                    <Subtitle>Laundry</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Microwave />
                    </Icons.Wrapper>
                    <Subtitle>Microwave</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Outdoor />
                    </Icons.Wrapper>
                    <Subtitle>Outdoor</Subtitle>
                </Wrapper.Box>
            </Wrapper.Col>
            <Wrapper.Col>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Refrigerator />
                    </Icons.Wrapper>
                    <Subtitle>Refrigerator</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Sauna />
                    </Icons.Wrapper>
                    <Subtitle>Sauna</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Swimmer />
                    </Icons.Wrapper>
                    <Subtitle>Swimmer</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Coaxial />
                    </Icons.Wrapper>
                    <Subtitle>Coaxial</Subtitle>
                </Wrapper.Box>
            </Wrapper.Col>
            <Wrapper.Col>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Liquid />
                    </Icons.Wrapper>
                    <Subtitle>Washer</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Wifi />
                    </Icons.Wrapper>
                    <Subtitle>Wifi</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Chair />
                    </Icons.Wrapper>
                    <Subtitle>Chair</Subtitle>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Icons.Wrapper>
                        <Icons.Blinds />
                    </Icons.Wrapper>
                    <Subtitle>Blinds</Subtitle>
                </Wrapper.Box>
            </Wrapper.Col>
        </Wrapper>
    </Container>
  )
}
