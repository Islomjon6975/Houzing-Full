import React, { useRef } from 'react'
import { Carousel } from 'antd';
import img1 from '../../../assets/imgs/home1.png'
import img2 from '../../../assets/imgs/home2.png'
import { ArrowLeft, ArrowRight, Box, Container, Form, Price, Subtitle, Title, Wrapper } from './style';
import { Button } from '../../Generic';
// import { Select } from 'antd';
export const Main = () => {

  const carouselRef = useRef();

  const onLeft = () => {
    carouselRef.current.prev();
  }

  const onRight = () => {
    carouselRef.current.next();
  }
  
  return (
    <Container>
      <ArrowLeft onClick={onLeft} />
      <ArrowRight onClick={onRight} />
      <Carousel ref={carouselRef}  autoplay effect="fade">
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
              minHeight: '571px',
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
              <Form>
                <Form.Input size="large" placeholder="Enter an address, city, ZIP code" />
                <Form.Wrapper>
                  <Form.Advanced  size="small">
                    <Form.Settings />Advanced
                  </Form.Advanced>
                  <Form.Advanced search='search'  size="small">
                    <Form.Search />Search
                  </Form.Advanced>
                </Form.Wrapper>
              </Form>
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
              minHeight: '571px',
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
              <Form>
                <Form.Input size="large" placeholder="Enter an address, city, ZIP code" />
                {/* <Form.Select defaultValue="Status" style={{ width: '100%', textAlign: 'left'}}>
                  <Option value="disabled" disabled>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Form.Select>
                <Form.Select defaultValue="Price" style={{ width: '100%', textAlign: 'left'}}>
                  <Option value="disabled" disabled>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Form.Select> */}
                <Form.Wrapper>
                  <Form.Advanced  size="small">
                    <Form.Settings />Advanced
                  </Form.Advanced>
                  <Form.Advanced search='search'  size="small">
                    <Form.Search />Search
                  </Form.Advanced>
                </Form.Wrapper>
              </Form>
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
              minHeight: '571px',
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
              <Form>
                <Form.Input size="large" placeholder="Enter an address, city, ZIP code" />
                {/* <Form.Select defaultValue="Status" style={{ width: '100%', textAlign: 'left'}}>
                  <Option value="disabled" disabled>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Form.Select>
                <Form.Select defaultValue="Price" style={{ width: '100%', textAlign: 'left'}}>
                  <Option value="disabled" disabled>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Form.Select> */}
                <Form.Wrapper>
                  <Form.Advanced  size="small">
                    <Form.Settings />Advanced
                  </Form.Advanced>
                  <Form.Advanced search='search'  size="small">
                    <Form.Search />Search
                  </Form.Advanced>
                </Form.Wrapper>
              </Form>
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
              minHeight: '571px',
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
              <Form>
                <Form.Input size="large" placeholder="Enter an address, city, ZIP code" />
                {/* <Form.Select defaultValue="Status" style={{ width: '100%', textAlign: 'left'}}>
                  <Option value="disabled" disabled>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Form.Select>
                <Form.Select defaultValue="Price" style={{ width: '100%', textAlign: 'left'}}>
                  <Option value="disabled" disabled>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Form.Select> */}
                <Form.Wrapper>
                  <Form.Advanced  size="small">
                    <Form.Settings />Advanced
                  </Form.Advanced>
                  <Form.Advanced search='search'  size="small">
                    <Form.Search />Search
                  </Form.Advanced>
                </Form.Wrapper>
              </Form>
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
              minHeight: '571px',
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
              <Form>
                <Form.Input size="large" placeholder="Enter an address, city, ZIP code" />
                {/* <Form.Select defaultValue="Status" style={{ width: '100%', textAlign: 'left'}}>
                  <Option value="disabled" disabled>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Form.Select>
                <Form.Select defaultValue="Price" style={{ width: '100%', textAlign: 'left'}}>
                  <Option value="disabled" disabled>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Form.Select> */}
                <Form.Wrapper>
                  <Form.Advanced  size="small">
                    <Form.Settings />Advanced
                  </Form.Advanced>
                  <Form.Advanced search='search'  size="small">
                    <Form.Search />Search
                  </Form.Advanced>
                </Form.Wrapper>
              </Form>
          </div>
        </div>
      </Carousel>
    </Container>
  )
}

export default Main