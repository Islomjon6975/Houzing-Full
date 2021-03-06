import React, { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Cards, Col, ColItem, Container, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel'
import cottage from '../../../assets/imgs/cottage.jpg'
import apartment from '../../../assets/imgs/apartment.png'
import office from '../../../assets/imgs/office.png'
import villa from '../../../assets/imgs/villa.png'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const {REACT_APP_BASE_URL:url} = process.env;

export const Categories = () => {
    const navigate = useNavigate()
    const slider = useRef();
    const [list, setList] = useState([])
    const goto = (id) => {
      navigate(`/properties?category_id=${id}`)
    }

    const items = [
      <Col onClick={() => goto(1)} >
        <Col.Img className="img-categories" src={cottage} />
        <ColItem>
          <ColItem.Apartment />
          <ColItem.Title>{list[0]?.name}</ColItem.Title>
        </ColItem>
      </Col>,
        <Col onClick={() => goto(2)}>
          <Col.Img className="img-categories" src={apartment} />
          <ColItem>
            <ColItem.Apartment />
            <ColItem.Title>{list[1]?.name}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col onClick={() => goto(3)}>
          <Col.Img className="img-categories" src={office} />
          <ColItem>
            <ColItem.Office />
            <ColItem.Title>{list[2]?.name}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col onClick={() => goto(4)}>
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.Villa />
            <ColItem.Title>{list[3]?.name}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col onClick={() => goto(5)}>
          <Col.Img className="img-categories" src={apartment} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>{list[3]?.name}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col onClick={() => goto(6)}>
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>{list[6]?.name}</ColItem.Title>
          </ColItem>
        </Col>,
        <Col onClick={() => goto(7)}>
          <Col.Img className="img-categories" src={villa} />
          <ColItem>
            <ColItem.House />
            <ColItem.Title>{list[7]?.name}</ColItem.Title>
          </ColItem>
        </Col>,
    ]


    useQuery(
      '',
      () => {
        return fetch(`${url}/v1/categories/list`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }).then((res) => res.json());
      },
      {
        onSuccess: (res) => {
          setList(res?.data || [])
        }
      }
    )

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
