import React, { useRef, useState } from 'react'
import Card from '../../Card'
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query';

const {REACT_APP_BASE_URL: url} = process.env

export const Categories = () => {
    const slider = useRef();
    const [list, setList] = useState([])

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
                setList(res?.dataList?.[0] || [])
            }
        }
    )
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
            arrows={false}
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
