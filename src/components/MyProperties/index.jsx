
import React from 'react'
import { Box, Container, Image, Subtitle, TexContainer, Title, Wrapper } from './style';

export const MyProperties = () => {
  return (
    <Container>
        <Wrapper>
            <Title>MyProperties</Title>
            <Box>
                <Box.Container>
                    <Box.Wrapper>
                        <Subtitle first>Listing Title</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle>Date Published</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle>Status</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle>View</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle last>Action</Subtitle>
                    </Box.Wrapper>
                </Box.Container>
                <Box.Container>
                    <Box.Wrapper>
                        <Image>
                            <Image.Button>Featured</Image.Button>
                            <Image.Img />
                        </Image>
                        <TexContainer>
                            <TexContainer.Title>New Apartment Nice Wiew <TexContainer.Sale>FOR SALE</TexContainer.Sale></TexContainer.Title>
                            <TexContainer.Desc>Quincy St, Brooklyn, NY, USA</TexContainer.Desc>
                            <TexContainer.DeletedPrice>$2,800/mo</TexContainer.DeletedPrice>
                            <TexContainer.Price>$7,500/mo</TexContainer.Price>
                        </TexContainer>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Desc>30 December 2022</TexContainer.Desc>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Desc>Pending</TexContainer.Desc>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Desc>5933</TexContainer.Desc>
                    </Box.Wrapper>
                    <Box.Wrapper></Box.Wrapper>
                </Box.Container>
            </Box>
        </Wrapper>
    </Container>
  )
}

export default MyProperties;