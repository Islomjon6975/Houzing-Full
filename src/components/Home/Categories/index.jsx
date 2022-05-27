import React, { useRef, useState } from 'react'
import Card from '../../Card'
import { ArrowLeft, ArrowRight, Cards, Col, ColItem, Container, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel'
// import house from '../../../assets/imgs/villa.png'
import cottage from '../../../assets/imgs/cottage.jpg'
import apartment from '../../../assets/imgs/apartment.png'
import office from '../../../assets/imgs/office.png'
import villa from '../../../assets/imgs/villa.png'
import { useQuery } from 'react-query';

const {REACT_APP_BASE_URL:url} = process.env;

export const Categories = () => {
    const slider = useRef();
    const [list, setList] = useState([])
    const items = [
      <Col >
        <Col.Img className="img-categories" src={cottage} />
        <ColItem>
          <ColItem.Apartment />
          <ColItem.Title>{list[0]}</ColItem.Title>
        </ColItem>
      </Col>,
        <Col >
          <Col.Img className="img-categories" src={apartment} />
          <ColItem>
            <ColItem.Apartment />
            <ColItem.Title>{list[1]}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={office} />
          <ColItem>
            <ColItem.Office />
            <ColItem.Title>{list[2]}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.Villa />
            <ColItem.Title>{list[3]}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={apartment} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>{list[3]}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>{list[6]}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col >
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>{list[7]}</ColItem.Title>
          </ColItem>
        </Col>,
    ]


    useQuery(
      '',
      () => {
        return fetch(`${url}/v1/categories`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }).then((res) => res.json());
      },
      {
        onSuccess: (res) => {
          console.log(res, 'ressss');
          // let response = res?.dataList?.[0]?.map((value) => (
          //   <div>
          //     <ColItem.Title>(value)</ColItem.Title>
          //   </div>
          // ))
          setList(res?.dataList?.[0] || [])
        }
      }
    )
    console.log(list[0])

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
