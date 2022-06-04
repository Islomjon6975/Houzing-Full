import React from 'react'
import Button from '../../Generic/Button'
import { Container, Input, Message, Subtitle, Title, Wrapper } from './style'

export const Schedule = () => {
  return (
    <Container>
        <Title>Schedule A Tour</Title>
        <Wrapper >
            <Input type={'date'} placeholder='Date' />
            <Input type={'time'} placeholder='Time' />
        </Wrapper>
        <Subtitle>Your Information</Subtitle>
        <Wrapper>
            <Input type={'text'} placeholder='Name' />
            <Input type={'text'} placeholder='Phone' />
            <Input type={'email'} placeholder='Email' />
        </Wrapper>
        <Wrapper mb={24} mt={20}>
            <Message placeholder='Enter Your Message' />
        </Wrapper>
        <Button width={'250px'} type={'primary'}>Submit a tour request</Button>
    </Container>
  )
}

export default Schedule