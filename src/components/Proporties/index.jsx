import React, { useState } from 'react'
import Settings from '../Filter'
import { Select } from 'antd';
import Card from '../Card';
import { useQuery } from 'react-query';
import { Button } from '../Generic';
import { useLocation } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import { Cards, Container, CountWrapper, Wrapper } from './style'

const {REACT_APP_BASE_URL:url} = process.env
const { Option } = Select;

export const ProportiesComponent = () => {
    const [data, setData] = useState([]);
    const { search } = useLocation();
    const query = useSearch();


    useQuery(
        ['dependancies', search], 
        () => {
            return fetch(`${url}/v1/houses/list${search}`)
                        .then((res) => res.json());
        }, {onSuccess: (res) => {
            setData(res?.dataList[0] || [])
        }}
    )


  return (
    <Container>
        <Settings />
        <Wrapper>
            <div className="title">Proporties</div>
            <div className="description">Siz orzu qilgan, siz izlagan shinam va arzon uylar.</div>
            <CountWrapper>
                <div className="description">{data?.length || 0} results</div>
                <CountWrapper.Sort defaultValue="Sort by: Newest Listings" style={{ width: 250}} >
                    <Option value="jack">Sort by: Newest Listings</Option>
                    <Option value="lucy">Sort by: Oldest Listings</Option>
                    <Option value="disabled">Sort by: Expensive Listings</Option>
                    <Option value="Yiminghe">Sort by: Cheap Listings</Option>
                </CountWrapper.Sort>
            </CountWrapper>
            <Cards>
                {
                    data?.map((value) => (
                        <Card key={value?.id} info={value} />
                    ))
                }
            </Cards>
            <Button type={'primary'} width={'250px'} mt={48} mb={96}>Show more</Button>
        </Wrapper>
    </Container>
  )
}

export default ProportiesComponent

// useReplace 
// useSearch
// useRequest