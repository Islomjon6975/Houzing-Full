
import React, { useState } from 'react'
import Settings from '../Filter'
import { Cards, Container, CountWrapper, Wrapper } from './style'
import { Select } from 'antd';
import Card from '../Card';


const { Option } = Select;

export const ProportiesComponent = () => {
    const [data, setData] = useState([]);
  return (
    <Container>
        <Settings />
        <Wrapper>
            <div className="title">Proporties</div>
            <div className="description">Siz orzu qilgan, siz izlagan shinam va arzon uylar.</div>
            <CountWrapper>
                <div className="description">{data.length || 0} results</div>
                <CountWrapper.Sort defaultValue="Sort by: Newest Listings" style={{ width: 250}} >
                    <Option value="jack">Sort by: Newest Listings</Option>
                    <Option value="lucy">Sort by: Oldest Listings</Option>
                    <Option value="disabled">Sort by: Expensive Listings</Option>
                    <Option value="Yiminghe">Sort by: Cheap Listings</Option>
                </CountWrapper.Sort>
            </CountWrapper>
            <Cards>
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
                <Card  />
            </Cards>
        </Wrapper>
    </Container>
  )
}

export default ProportiesComponent