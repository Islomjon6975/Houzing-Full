import React, { useRef } from 'react'
import Card from '../../Card'
import AliceCarousel from 'react-alice-carousel'
import { ArrowLeft, ArrowRight, Cards, Carousel, Col, Container, Wrapper } from './style'
import 'react-alice-carousel/lib/alice-carousel.css';
import house from '../../../assets/imgs/house.png'
import apartment from '../../../assets/imgs/apartment.png'
import office from '../../../assets/imgs/office.png'
import villa from '../../../assets/imgs/villa.png'
import { useQuery } from 'react-query';

const {REACT_APP_BASE_URL: url} = process.env

export const Categories = () => {


    useQuery(
        '', 
        () => {
        return fetch(`${url}/v1/categories`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

        }).then((res) => res.json())
        },
        {
            onSuccess: (res) => {
                console.log(res, 'res');
            }
        }
    )



    const items = [
        <Col style={{backgroundImage: `url(${apartment})`, }}><Col.House /></Col>,
        <Col style={{backgroundImage: `url(${apartment})`, }} ><Col.Apartment /></Col>,
        <Col style={{backgroundImage: `url(${office})`, }} ><Col.Office /></Col>,
        <Col style={{backgroundImage: `url(${villa})`, }} ><Col.Villa /></Col>,
        <Col style={{backgroundImage: `url(${villa})`, }} ><Col.Villa /></Col>,
        <Col style={{backgroundImage: `url(${villa})`, }} ><Col.Villa /></Col>,
        <Col style={{backgroundImage: `url(${villa})`, }} ><Col.Villa /></Col>,
    ]
    const slider = useRef();

  return (
    <Container>
        <div className="title center nocopy">Recommended</div>
        <div className="description center nocopy" >
            Siz orzu qilgan, siz izlagan shinam va arzon uylar.
        </div>
        <Wrapper>
            <Carousel>
                <AliceCarousel ref={slider} autoWidth items={items} />
                <ArrowLeft onClick={() => slider?.current?.Next()} />
                <ArrowRight onClick={() => slider?.current?.Prev()} />
            </Carousel>
        </Wrapper>
    </Container>
  )
}
