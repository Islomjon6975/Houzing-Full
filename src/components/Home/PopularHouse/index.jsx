import React from 'react'
import { Container, Title, Wrapper } from './style';
import img from '../../../assets/imgs/home2.png'
import { Button } from '../../Generic';


export const PopularHouse = () => {
  return (
    <Container style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        minHeight: '571px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
    }}>
        <Wrapper>
            <Title>Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home</Title>
            <Button width={'180px'} height={'44px'} type={'primary'}>Read more</Button>
        </Wrapper>
    </Container>
  )
}

export default PopularHouse;