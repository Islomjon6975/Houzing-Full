
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useHttp } from '../../hooks/useHttps';
import Button from '../Generic/Button';
import { Box, Container, Icons, Image, Subtitle, TexContainer, Title, Wrapper } from './style';
const {REACT_APP_BASE_URL:url} = process.env

export const MyProperties = () => {
    const {request} = useHttp();
    const [state, setState] = useState([])
    const navigate = useNavigate()

    useQuery(
        'getMyProperties',
        () => {
            // return request({url: '/v1/houses/me', token: true})
            return fetch(`${url}/v1/houses/me`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => res.json())
        }, 
        {
            onSuccuss: (res) =>console.log(res, 'res')
        }
    )

    // console.log(state, 'my properties')

  return (
    <Container>
        <Wrapper>
            <Wrapper.Wrapper>
                <Title>My Properties</Title>
                <Button onClick={() => navigate('/properties/addnew')} type='primary' width={'120px'}>Add New</Button>
            </Wrapper.Wrapper>
            <Box>
                <Box.Container>
                    <Box.Wrapper>
                        <Subtitle first>Listing Title</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle>Date Published</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle>Status</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle>View</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle last>Action</Subtitle>
                    </Box.Wrapper>
                </Box.Container>
                <Box.Container>
                    <Box.Wrapper>
                        <Image>
                            <Image.Button>Featured</Image.Button>
                            <Image.Img />
                        </Image>
                        <TexContainer>
                            <TexContainer.Title>New Apartment Nice Wiew <TexContainer.Sale>FOR SALE</TexContainer.Sale></TexContainer.Title>
                            <TexContainer.Desc>Quincy St, Brooklyn, NY, USA</TexContainer.Desc>
                            <TexContainer.DeletedPrice>$2,800/mo</TexContainer.DeletedPrice>
                            <TexContainer.Price>$7,500/mo</TexContainer.Price>
                        </TexContainer>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>30 December 2022</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>Pending</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>5933</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Icons>
                            <Icons.Wrapper>
                                <Icons.Edit />
                            </Icons.Wrapper>
                            <Icons.Wrapper>
                                <Icons.Trash />
                            </Icons.Wrapper>
                        </Icons>
                    </Box.Wrapper>
                </Box.Container>
                
                <Box.Container>
                    <Box.Wrapper>
                        <Image>
                            <Image.Button>Featured</Image.Button>
                            <Image.Img />
                        </Image>
                        <TexContainer>
                            <TexContainer.Title>New Apartment Nice Wiew <TexContainer.Sale>FOR SALE</TexContainer.Sale></TexContainer.Title>
                            <TexContainer.Desc>Quincy St, Brooklyn, NY, USA</TexContainer.Desc>
                            <TexContainer.DeletedPrice>$2,800/mo</TexContainer.DeletedPrice>
                            <TexContainer.Price>$7,500/mo</TexContainer.Price>
                        </TexContainer>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>30 December 2022</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>Pending</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>5933</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Icons>
                            <Icons.Wrapper>
                                <Icons.Edit />
                            </Icons.Wrapper>
                            <Icons.Wrapper>
                                <Icons.Trash />
                            </Icons.Wrapper>
                        </Icons>
                    </Box.Wrapper>
                </Box.Container>
                
                <Box.Container>
                    <Box.Wrapper>
                        <Image>
                            <Image.Button>Featured</Image.Button>
                            <Image.Img />
                        </Image>
                        <TexContainer>
                            <TexContainer.Title>New Apartment Nice Wiew <TexContainer.Sale>FOR SALE</TexContainer.Sale></TexContainer.Title>
                            <TexContainer.Desc>Quincy St, Brooklyn, NY, USA</TexContainer.Desc>
                            <TexContainer.DeletedPrice>$2,800/mo</TexContainer.DeletedPrice>
                            <TexContainer.Price>$7,500/mo</TexContainer.Price>
                        </TexContainer>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>30 December 2022</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>Pending</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <TexContainer.Status>5933</TexContainer.Status>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Icons>
                            <Icons.Wrapper>
                                <Icons.Edit />
                            </Icons.Wrapper>
                            <Icons.Wrapper>
                                <Icons.Trash />
                            </Icons.Wrapper>
                        </Icons>
                    </Box.Wrapper>
                </Box.Container>
            </Box>
        </Wrapper>
    </Container>
  )
}

export default MyProperties;