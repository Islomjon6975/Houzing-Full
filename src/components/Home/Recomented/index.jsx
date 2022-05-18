import React, { useRef } from 'react'
import Card from '../../Card'
import AliceCarousel from 'react-alice-carousel'
import { ArrowLeft, ArrowRight, Carousel, Container, Wrapper } from './style'

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

    const arrowLeft = () => {
        // console.log(slider.current);
        // slider.current?.sliderNext()
    }

  return (
    <Container>
        <div className="title center">Recommended</div>
        <div className="description center">
            Siz orzu qilgan, siz izlagan shinam va arzon uylar.
        </div>
        <Wrapper>
            <Carousel>
                <AliceCarousel ref={slider} autoWidth items={items} />
                <ArrowLeft onClick={arrowLeft} />
                <ArrowRight onClick={() => slider.current?.sliderPrev()} />
            </Carousel>
        </Wrapper>
    </Container>
  )
}
