import React from 'react'
import { Carousel } from 'antd';
import img1 from '../../../assets/imgs/home1.png'
import img2 from '../../../assets/imgs/home2.png'
import { Box, Container, Price, Subtitle, Title, Wrapper } from './style';
import { Button } from '../../Generic';

export const Main = () => {

  // const contentStyle = {
  //   width: '100%',
  //   height: '571px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };

  return (
    <Container>
      <Carousel effect="fade">
        <div>
          <div 
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '571px',
              color: '#fff',
              lineHeight: '160px',
              textAlign: 'center',
            } }>
              <Title >Skyper Pool Partment</Title>
              <Subtitle>112 Glenwood Ave Hyde Park, Boston, MA</Subtitle>
              <Wrapper>
                <Box>
                  <Box.Bed />
                  <Box.Desc>4 beds</Box.Desc>
                </Box>
                <Box>
                  <Box.Bath />
                  <Box.Desc>5 Baths</Box.Desc>
                </Box>
                <Box>
                  <Box.Car />
                  <Box.Desc>1 Garage</Box.Desc>
                </Box>
                <Box>
                  <Box.Ruler />
                  <Box.Desc>1200 Sq Ft</Box.Desc>
                </Box>
              </Wrapper>
              <Price>$5,250/mo</Price>
              <Button width={'180px'}>Read more</Button>
            </div>
        </div>
        <div>
          <div 
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '571px',
              color: '#fff',
              lineHeight: '160px',
              textAlign: 'center',
            } }>
            <Title >Skyper Pool Partment</Title>
            <Subtitle>112 Glenwood Ave Hyde Park, Boston, MA</Subtitle>
            <Wrapper>
              <Box>
                <Box.Bed />
                <Box.Desc>4 beds</Box.Desc>
              </Box>
              <Box>
                <Box.Bath />
                <Box.Desc>5 Baths</Box.Desc>
              </Box>
              <Box>
                <Box.Car />
                <Box.Desc>1 Garage</Box.Desc>
              </Box>
              <Box>
                <Box.Ruler />
                <Box.Desc>1200 Sq Ft</Box.Desc>
              </Box>
            </Wrapper>
            <Price>$5,250/mo</Price>
            <Button width={'180px'}>Read more</Button>
          </div>
        </div>
        <div>
          <div 
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '571px',
              color: '#fff',
              lineHeight: '160px',
              textAlign: 'center',
            } }>
            <Title >Skyper Pool Partment</Title>
            <Subtitle>112 Glenwood Ave Hyde Park, Boston, MA</Subtitle>
            <Wrapper>
              <Box>
                <Box.Bed />
                <Box.Desc>4 beds</Box.Desc>
              </Box>
              <Box>
                <Box.Bath />
                <Box.Desc>5 Baths</Box.Desc>
              </Box>
              <Box>
                <Box.Car />
                <Box.Desc>1 Garage</Box.Desc>
              </Box>
              <Box>
                <Box.Ruler />
                <Box.Desc>1200 Sq Ft</Box.Desc>
              </Box>
            </Wrapper>
            <Price>$5,250/mo</Price>
            <Button width={'180px'}>Read more</Button>
          </div>
        </div>
        <div>
          <div 
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '571px',
              color: '#fff',
              lineHeight: '160px',
              textAlign: 'center',
            } }>
            <Title >Skyper Pool Partment</Title>
            <Subtitle>112 Glenwood Ave Hyde Park, Boston, MA</Subtitle>
            <Wrapper>
              <Box>
                <Box.Bed />
                <Box.Desc>4 beds</Box.Desc>
              </Box>
              <Box>
                <Box.Bath />
                <Box.Desc>5 Baths</Box.Desc>
              </Box>
              <Box>
                <Box.Car />
                <Box.Desc>1 Garage</Box.Desc>
              </Box>
              <Box>
                <Box.Ruler />
                <Box.Desc>1200 Sq Ft</Box.Desc>
              </Box>
            </Wrapper>
            <Price>$5,250/mo</Price>
            <Button width={'180px'}>Read more</Button>
          </div>
        </div>
        <div>
          <div 
              style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img2})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              height: '571px',
              color: '#fff',
              lineHeight: '160px',
              textAlign: 'center',
            } }>
              <Title >Skyper Pool Partment</Title>
              <Subtitle>112 Glenwood Ave Hyde Park, Boston, MA</Subtitle>
              <Wrapper>
                <Box>
                  <Box.Bed />
                  <Box.Desc>4 beds</Box.Desc>
                </Box>
                <Box>
                  <Box.Bath />
                  <Box.Desc>5 Baths</Box.Desc>
                </Box>
                <Box>
                  <Box.Car />
                  <Box.Desc>1 Garage</Box.Desc>
                </Box>
                <Box>
                  <Box.Ruler />
                  <Box.Desc>1200 Sq Ft</Box.Desc>
                </Box>
              </Wrapper>
              <Price>$5,250/mo</Price>
              <Button width={'180px'}>Read more</Button>
          </div>
        </div>
      </Carousel>
    </Container>
  )
}

export default Main