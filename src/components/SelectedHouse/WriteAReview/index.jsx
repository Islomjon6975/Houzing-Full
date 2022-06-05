import React from 'react'
import {  Container, Desc,  Input,  Message,  Star, Title, Wrapper } from './style'
import { Progress } from 'antd';
import user from '../../../assets/imgs/user.png'
import Button from '../../Generic/Button';

export const WriteAReview = () => {
  return (
    <Container>
        <Title>Write a Review</Title>
        <Wrapper mb={23}>
            <Wrapper>
                <Desc>Cleanliness</Desc>
                <Wrapper width={100} gap={1}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Desc>Accuracy</Desc>
                <Wrapper width={100} gap={1}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper mb={23}>
            <Wrapper >
                <Desc>Communication</Desc>
                <Wrapper width={100} gap={1}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Desc>Location</Desc>
                <Wrapper width={100} gap={1}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper>
            <Wrapper>
                <Desc>Checkin</Desc>
                <Wrapper width={100} gap={1}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Desc>Value</Desc>
                <Wrapper width={100} gap={1}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper mt={70}>
            <Input placeholder={'Name'} />
            <Input placeholder={'Email'} />
        </Wrapper>
        <Wrapper mb={24}>
            <Message placeholder='Enter Your Message' />
        </Wrapper>
        <Button width={'250px'} type={'primary'}>Send your review</Button>
    </Container>
  )
}

export default  WriteAReview