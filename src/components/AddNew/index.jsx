import React from 'react'
import Button from '../Generic/Button'
import { Box, Container, Subtitle, Title, Wrapper } from './style'

export const AddNew = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Add new property</Title>
            <Box>
                <Subtitle>Contact information</Subtitle>
            </Box>
            <Box>
                <Subtitle>Additional</Subtitle>
            </Box>
            <Box>
                <Subtitle>Price</Subtitle>
            </Box>
            <Box>
                <Subtitle>Location</Subtitle>
            </Box>
            <Box>
                <Subtitle>Media</Subtitle>
            </Box>
            <Box>
                <Subtitle>Amenities</Subtitle>
            </Box>
            <Box>
                <Subtitle>Select Energy Class</Subtitle>
            </Box>
            <Box.Wrappar>
                <Button  width={'280px'} type='primary'>Submit</Button>
            </Box.Wrappar>
        </Wrapper>
    </Container>
  )
}

export default AddNew