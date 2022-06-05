import React from 'react'
import { Card, Container, Desc, Title, Wrapper } from './style'
import { Progress } from 'antd';
import user from '../../../assets/imgs/user.png'

export const Reviews = () => {
  return (
    <Container>
        <Title>4.67 (14 reviews)</Title>
        <Wrapper mb={23}>
            <Wrapper>
                <Desc>Cleanliness</Desc>
                <Progress  format={(percent) => percent} status='active' width={'100%'} size="small" percent={47} />
            </Wrapper>
            <Wrapper>
                <Desc>Accuracy</Desc>
                <Progress   format={(percent) => percent} status='active' width={'100%'} size="small" percent={57} />
            </Wrapper>
        </Wrapper>
        <Wrapper mb={23}>
            <Wrapper >
                <Desc>Communication</Desc>
                <Progress   format={(percent) => percent} status='active' width={'100%'} size="small" percent={37} />
            </Wrapper>
            <Wrapper>
                <Desc>Location</Desc>
                <Progress   format={(percent) => percent} status='active' width={'100%'} size="small" percent={87} />
            </Wrapper>
        </Wrapper>
        <Wrapper>
            <Wrapper>
                <Desc>Checkin</Desc>
                <Progress   format={(percent) => percent} status='active' width={'100%'} size="small" percent={17} />
            </Wrapper>
            <Wrapper>
                <Desc>Value</Desc>
                <Progress   format={(percent) => percent} status='active' width={'100%'} size="small" percent={57} />
            </Wrapper>
        </Wrapper>
        <Wrapper mt={26} gap={20} mb={20}>
            <Card>
                <Card.Img src={user}  />
                <Card.Name>Jane Cooper</Card.Name>
                <Wrapper mb={20}>
                    <Card.Subdesc>April 6, 2021 at 3:21 AM</Card.Subdesc>
                    <Wrapper gap={1}>
                        <Card.Star />
                        <Card.Star />
                        <Card.Star />
                        <Card.Star />
                        <Card.Star />
                        <Card.Subdesc>(5 reviews)</Card.Subdesc>
                    </Wrapper>
                </Wrapper>
                <Desc>Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul. </Desc>

            </Card>
            <Card>
                <Card.Img src={user}  />
                <Card.Name>Jane Cooper</Card.Name>
                <Wrapper  mb={20}>
                    <Card.Subdesc>April 6, 2021 at 3:21 AM</Card.Subdesc>
                    <Wrapper gap={1}>
                        <Card.Star />
                        <Card.Star />
                        <Card.Star />
                        <Card.Star />
                        <Card.Star />
                        <Card.Subdesc>(5 reviews)</Card.Subdesc>
                    </Wrapper>
                </Wrapper>
            <Desc>Every single thing we tried with John was delicious! Found some awesome places we would definitely go back to on our trip. John was also super friendly and passionate about Beşiktaş and Istanbul. </Desc>

            </Card>
        </Wrapper>
    </Container>
  )
}

export default  Reviews