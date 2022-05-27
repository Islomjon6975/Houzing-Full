import React, { useRef } from 'react'
import Card from '../../Card'
import { ArrowLeft, ArrowRight, Cards, Col, ColItem, Container, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel'
import house from '../../../assets/imgs/villa.png'
import apartment from '../../../assets/imgs/apartment.png'
import office from '../../../assets/imgs/office.png'
import villa from '../../../assets/imgs/villa.png'

export const Categories = () => {
    const slider = useRef();
    const items = [
        // <Card mr={20} />,
        // <Card mr={20} />,
        // <Card mr={20} />,
        // <Card mr={20} />,
        // <Card mr={20} />,
        // <Card mr={20} />,
        // <Card mr={20} />,
        // <Card  />,
        // <Col >
        //   <Col.Img className="img-categories" src={house} />
        //   <ColItem>
        //     <ColItem.House />
        //     <ColItem.Title>House</ColItem.Title>
        //   </ColItem>
        // </Col>,
        <Col >
          <Col.Img className="img-categories" src={apartment} />
          <ColItem>
            <ColItem.Apartment />
            <ColItem.Title>Apartment</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={office} />
          <ColItem>
            <ColItem.Office />
            <ColItem.Title>Office</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.Villa />
            <ColItem.Title>Villa</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={apartment} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>House</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>House</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>House</ColItem.Title>
          </ColItem>
        </Col>,
    ]
    

  return (
    <Container className='nocopy'>
      <div className='title center'>Categories</div>
      <div className='description center'>
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
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
      </Wrapper>
    </Container>
  )
}
