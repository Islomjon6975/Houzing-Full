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
            }
        })

    return (
    <Container>{state?.address}</Container>
  )
}

export default SelectedHouse;
