import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';
import { Container, Desc, Subtitle, Title, Wrapper } from './style'

const {REACT_APP_BASE_URL: url} = process.env;


export const PropertyDetails = () => {

    const [state, setState] = useState({});
    const { id } = useParams();


    useQuery(
        'get data', 
        () => {
            return fetch(`${url}/v1/houses/${id.replace(':', '')}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => res.json())
        }, 
        {
            onSuccess: (res) => {
                setState(res?.data)
            },
            keepPreviousData: true, // bu browserdan tashqariga chiqib yana kirsa, yana yurishni oldini olish uchun
            refetchOnWindowFocus: false, // bu ham focus bolgan vaqti malumot olib kelish
    })
    
    console.log(state, 'ssssssssssssssssssssss');

  return (
    <Container>
        <Title>Property Details</Title>
        <Wrapper>
            <Wrapper.Col>
                <Wrapper.Box>
                    <Subtitle>Property ID:</Subtitle>
                    <Desc>{state?.id ? state?.id : 'no id'}</Desc>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Subtitle>Price:</Subtitle>
                    <Desc>${state?.price ? state?.price : 'no price'}</Desc>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Subtitle>Property Size:</Subtitle>
                    <Desc>1560 Sq Ft</Desc>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Subtitle>Year Bulit:</Subtitle>
                    <Desc>{state?.yearBuilt ? state?.houseDetails?.yearBuilt : 'no year'}</Desc>
                </Wrapper.Box>
            </Wrapper.Col>
            <Wrapper.Col>
                <Wrapper.Box>
                    <Subtitle>Bedrooms:</Subtitle>
                    <Desc>{state?.houseDetails?.beds ? state?.houseDetails?.beds : 'no beds'}</Desc>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Subtitle>Bathroom:</Subtitle>
                    <Desc>{state?.houseDetails?.bath ? state?.houseDetails?.bath : 'no bath'}</Desc>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Subtitle>Garage:</Subtitle>
                    <Desc>{state?.houseDetails?.garage ? state?.houseDetails?.garage : 'no garage'}</Desc>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Subtitle>Garage size:</Subtitle>
                    <Desc>2021-01-09</Desc>
                </Wrapper.Box>
            </Wrapper.Col>
            <Wrapper.Col>
                <Wrapper.Box>
                    <Subtitle>Property Type:</Subtitle>
                    <Desc>{state?.category?.name ? state?.category?.name : 'no name'}</Desc>
                </Wrapper.Box>
                <Wrapper.Box>
                    <Subtitle>Property Status:</Subtitle>
                    <Desc>For sale</Desc>
                </Wrapper.Box>
               
            </Wrapper.Col>
        </Wrapper>
    </Container>
  )
}

export default PropertyDetails