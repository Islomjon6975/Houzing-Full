
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { useHttp } from '../../hooks/useHttps';
import Button from '../Generic/Button';
import { Box, Container, Icons, Image, Subtitle, TexContainer, Title, Wrapper } from './style';
const {REACT_APP_BASE_URL:url} = process.env

export const MyProperties = () => {
    const {request} = useHttp();
    const [state, setState] = useState([])
    const navigate = useNavigate();

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
            onSuccess: (res) => {setState(res?.data || [])},
            refetchOnWindowFocus: false,
            keepPreviousData: true,
        },
        
    )


    const deleteProduct = useMutation((id) => {
         request({url:`/v1/houses/${id}`, method:'DELETE', token: true})
    })

    const onDelete = (idd)  => {
        deleteProduct.mutate(idd, {
            onSuccess: (res) => console.log(res, 'fff')
        })
    }


  return (
    <Container>
        <Wrapper>
            <Wrapper.Wrapper>
                <Title>My Properties</Title>
                <span className='btn'><Button onClick={() => navigate('/properties/addnew')} type='primary' width={'120px'}>Add New</Button></span>
            </Wrapper.Wrapper>
            <span className='btnn'><Button onClick={() => navigate('/properties/addnew')} type='primary' width={'120px'}>Add New</Button></span>

            <Box>
                <Box.Container>
                    <Box.Wrapper>
                        <Subtitle first>Listing Title</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper none>
                        <Subtitle >Date Published</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper none>
                        <Subtitle>Status</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper none>
                        <Subtitle>View</Subtitle>
                    </Box.Wrapper>
                    <Box.Wrapper>
                        <Subtitle last>Action</Subtitle>
                    </Box.Wrapper>
                </Box.Container> 
                {
                    state?.map((data) => {
                        return(
                            <Box.Container key={data.id}>
                                <Box.Wrapper>
                                    <Image>
                                        <Image.Button>Featured</Image.Button>
                                        <Image.Img src={data?.attachments[0]?.imgPath} />
                                    </Image>
                                    <TexContainer>
                                        <TexContainer.Title>{data?.region} <TexContainer.Sale>FOR SALE</TexContainer.Sale></TexContainer.Title>
                                        <TexContainer.Desc>{data?.description}</TexContainer.Desc>
                                        <TexContainer.DeletedPrice>$2,800/mo</TexContainer.DeletedPrice>
                                        <TexContainer.Price>$7,500/mo</TexContainer.Price>
                                    </TexContainer>
                                </Box.Wrapper>
                                <Box.Wrapper none>
                                    <TexContainer.Status>30 December 2022</TexContainer.Status>
                                </Box.Wrapper >
                                <Box.Wrapper none>
                                    <TexContainer.Status>Pending</TexContainer.Status>
                                </Box.Wrapper>
                                <Box.Wrapper none>
                                    <TexContainer.Status>5933</TexContainer.Status>
                                </Box.Wrapper>
                                <Box.Wrapper>
                                    <Icons>
                                        <Icons.Wrapper>
                                            <Icons.Edit onClick={() => navigate(`properties/addnew/${data?.id}`)} />
                                        </Icons.Wrapper>
                                        <Icons.Wrapper>
                                            <Icons.Trash 
                                            title='Uyni ochirmoqchimsiz?'
                                            onClick={onDelete}
                                            />
                                        </Icons.Wrapper>
                                    </Icons>
                                </Box.Wrapper>
                            </Box.Container>
                        )
                    })
                }
            </Box>
        </Wrapper>
    </Container>
  )
}

export default MyProperties;