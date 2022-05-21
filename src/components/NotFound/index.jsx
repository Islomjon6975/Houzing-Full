import React from 'react'
import { Back, Container, Description, Img, Section, Telegraph, Title, Wrapper } from './style'
import img from '../../assets/imgs/notfound.png'
import { Button, Input } from '../Generic'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
        <Wrapper>
            <Img src={img} />
            <Title>Ohh! Page Not Found</Title>
            <Description>We can’t seem to find the page you’re looking for</Description>
            <Section>
                <Input placeholder={'Enter your email'} mb={17}  />
                <Button type={'primary'} mb={17} width={'50px' }>
                    <Telegraph />
                </Button>
            </Section>
            <Back onClick={()=>navigate('/')}>Back to home</Back>
        </Wrapper>
    </Container>
  )
}
