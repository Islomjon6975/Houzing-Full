import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Card from '../Card'
import { Button } from '../Generic'
import { Cards, Container, Wrapper } from './style'


const {REACT_APP_BASE_URL: url} = process.env

export const FavouriteComponent = () => {
    const [data, setData] = useState([]);

    useQuery('get data', () => {
        return fetch(`${url}/v1/houses/list`).then((res) => res.json());
    }, {onSuccess: (res) => {
        setData(res?.dataList[0])
    }})

  return (
    <Container>
        <Wrapper>
            <div className="title">Favourite</div>
            <div className="description">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
            <Cards>
                <Card  bg={'#CC5040'} />
                <Card  bg={'#CC5040'} />
                <Card  bg={'#CC5040'} />
                <Card  bg={'#CC5040'} />
                {/* {
                    data.map((value) => (
                        <Card  key={value?.id} info={value} />
                    ))
                } */}
            </Cards>
            <Button type={'primary'}  mt={24} width='250px'>Show More</Button>
        </Wrapper>
    </Container>
  )
}
