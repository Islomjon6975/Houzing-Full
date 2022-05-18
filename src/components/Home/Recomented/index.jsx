import React from 'react'
import Card from '../../Card'
import AliceCarousel from 'react-alice-carousel'
import { Carousel, Container, Wrapper } from './style'

export const Recommended = () => {
    const items = [
        <Card mr={20} />,
        <Card mr={20} />,
        <Card mr={20} />,
        <Card mr={20} />,
        <Card mr={20} />,
        <Card mr={20} />,
        <Card mr={20} />,
        <Card  />,
    ]
  return (
    <Container>
        <div className="title center">Recommended</div>
        <div className="description center">
            Siz orzu qilgan, siz izlagan shinam va arzon uylar.
        </div>
        <Wrapper>
            <Carousel>
                <AliceCarousel autoWidth items={items} />
            </Carousel>
        </Wrapper>
    </Container>
  )
}
