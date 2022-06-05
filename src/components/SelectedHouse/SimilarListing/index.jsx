import React, { useRef } from 'react'
import { ArrowLeft, ArrowRight, Cards, Container, Subtitle, SubWrapper, Title, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel'
import Card from '../../Card';

export const SimilarListing = () => {

    const slider = useRef();
    const items = [
        <Card width={381} mr={50} />,
        <Card width={381} mr={50} />,
        <Card width={381} mr={50} />,
        <Card width={381} mr={50} />,
        <Card width={381} mr={50} />,
        <Card width={381} mr={50} />,
        <Card width={381} mr={50} />,
        <Card width={381}  />,
    ]

  return (
    <Container>
        {/* <Wrapper> */}
            <Title>Similar listings</Title>
            <Subtitle>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</Subtitle>
            <SubWrapper>
                <Cards>
                    <AliceCarousel
                        // arrows={false}
                        ref={slider}
                        autoWidth
                        mouseTracking
                        items={items}
                    />
                    <ArrowRight onClick={() => slider.current?.slidePrev()}>
                        &lang;
                    </ArrowRight>
                    <ArrowLeft onClick={() => slider.current?.slideNext()}>
                        &rang;
                    </ArrowLeft>
                </Cards>
            </SubWrapper>
        {/* </Wrapper> */}
    </Container>
  )
}

export default SimilarListing;