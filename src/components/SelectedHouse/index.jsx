import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Container, Wrapper } from './style';

import img1 from '../../assets/imgs/home1.png'
import img2 from '../../assets/imgs/home2.png'
import img3 from '../../assets/imgs/home1.png'
import img4 from '../../assets/imgs/home1.png'
import Images from './Images';
import LuxaryFamily from './LuxaryFamily';
import SimilarListing from './SimilarListing';

const {REACT_APP_BASE_URL: url} = process.env;
 
export const SelectedHouse = () => {
    const [state, setState] = useState();
    const { id } = useParams();

    const [imgg, setImg] = [
        img1, img2, img3, img4,
    ]

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

    return (
    <Container>
        <Images />
        <LuxaryFamily  />
        <SimilarListing />
    </Container>
  )
}

export default SelectedHouse;
