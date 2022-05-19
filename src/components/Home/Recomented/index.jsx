import React, { useRef } from 'react'
import Card from '../../Card'
import AliceCarousel from 'react-alice-carousel'
import { ArrowLeft, ArrowRight, Cards, Carousel, Container, Wrapper } from './style'
import 'react-alice-carousel/lib/alice-carousel.css';

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
    const slider = useRef();

  return (
    <Container>
        <div className="title center">Recommended</div>
        <div className="description center" >
            Siz orzu qilgan, siz izlagan shinam va arzon uylar.
        </div>
        <Wrapper>
            <Carousel>
                <AliceCarousel ref={slider} autoWidth items={items} />
                <ArrowLeft onClick={() => slider?.current?.Next()} />
                <ArrowRight onClick={() => slider?.current?.Prev()} />
            </Carousel>
            <Cards>
                <Card mb={20} />
                <Card mb={20} />
                
            </Cards>
        </Wrapper>
    </Container>
  )
}
