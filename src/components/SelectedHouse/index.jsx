import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Container } from './style';

const {REACT_APP_BASE_URL: url} = process.env;
 
export const SelectedHouse = () => {
    const [state, setState] = useState();
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

    return (
    <Container>
        <h1>{state?.address}</h1>
        {
            state?.attachments?.map((value) => {
                return(
                    <div key={value?.id}>
                        <img src={value.imgPath} alt="" />
                    </div>
                )
            })
        }
    </Container>
  )
}

export default SelectedHouse;
