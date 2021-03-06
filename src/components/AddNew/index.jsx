import React from 'react'
import Button from '../Generic/Button'
import Input from '../Generic/Input'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Box, Container, Description, Subtitle, Title, Wrapper } from './style'
import { useState } from 'react';
import { message, Upload } from 'antd';
import Checkbox from '../Generic/Checkbox';
import { useHttp } from '../../hooks/useHttps';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

export const AddNew = () => {
    const [state, setState] = useState()
    const [dataa, setDataa] = useState()
    const navigate = useNavigate()
    const { request } = useHttp()
    const [input, setInput] = useState('')

    const {id} = useParams();
    useQuery('getSignle Item', () => {
        return request({url: `/v1/houses/${id}`, token: true})
    },
    {
        onSuccess: (res) => {
            console.log(res, 'res');
            setDataa(res?.data)
        }
    }
    )



    const [center, setCenter] = useState({
        lat: 41.311081,
        lng:  69.240562,
    })


    const containerStyle = {
        width: '100%',
        height: '600px'
    };
    
    // const center = {
    //     lat: 41.311081,
    //     lng:  69.240562,
    // };

    const { REACT_APP_GoogleApiKey: key } = process.env;
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: key,
    })
    
    const [map, setMap] = React.useState(null)



    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      
        onChange({ file, fileList }) {
          if (file.status !== 'uploading') {
            console.log(file, fileList);
          }
        },
      
        defaultFileList: [
          
        ],
      };

      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

      const onMapClick = (e) => {
        // console.log(e?.latLng?.lat(), 'lat');
        // console.log(e?.latLng?.lng(), 'lng');
        setCenter({
            lat: e?.latLng?.lat(),
            lng: e?.latLng?.lng()
        })
      }

      const [homeAmenitiesDto, setHomeAmenitiesDto] = useState();

      const onChange = (e) => {
        const {name, value} = e.target;
        setState(()=>{
            return{
                ...state,
                [name]: value,
            }
        })
        setHomeAmenitiesDto(
            ()=>{
                return{
                    ...state,
                    [name]: value,
                }
            }
        )
      };



      const {mutate} = useMutation(() => request({
        url: '/v1/houses', 
        method: 'POST', 
        token: true,
        body : {
            "address": state.address,
            "attachments": [
              {
                "imgPath": "https://static.ngs.ru/news/99/preview/20ff64d4a539a0b4c37c733164f27a850068ccff_1100.jpg"
              }
            ],
            "categoryId": 0,
            "city": "Earth",
            "componentsDto": {
              "additional": "string",
              "airCondition": true,
              "courtyard": true,
              "furniture": true,
              "gasStove": true,
              "internet": true,
              "tv": true
            },
            "country": state.country,
            "description": "uynilar jadvali  iiii",
            "favorite": true,
            "homeAmenitiesDto": {
              "additional": "string",
              "busStop": true,
              "garden": true,
              "market": true,
              "park": true,
              "parking": true,
              "school": true,
              "stadium": true,
              "subway": true,
              "superMarket": true
            },
            "houseDetails": {
              "area": homeAmenitiesDto.area,
              "bath": homeAmenitiesDto.bath,
              "beds": homeAmenitiesDto.beds,
              "garage": homeAmenitiesDto.garage,
              "room": homeAmenitiesDto.room,
              "yearBuilt": homeAmenitiesDto.yearBuilt,
            },
            "locations": {
              "latitude": center?.lat,
              "longitude": center?.lng,
            },
            "name":state.name,
            "price": state.price,
            "region": "Tashkent city",
            "salePrice": state.salePrice,
            "status": true,
            "zipCode": state.zipCode,
          },
    }))

    // const {mutate: update } = useMutation((id) => {
    //     return {
    //         request({
    //             url: `v1/houses/:${id}`,
    //             method: 'PUT',
    //             token: true,
    //             body: data
    //         })
    //     }
    // })

    
    const onSubmit = () => {

        if(id){
            mutate(id, {
                onSuccess: (res) => {
                    message.info('updated');
                    navigate('/myproperties');
                }
            })
        }else{
            mutate('', {
                onSuccess: (res) => {
                    console.log(res);
                    if(res?.success){
                        navigate('/myproperties');
                    }
                }
            });
        }  
    };

    console.log(dataa, 'dataaaaaaaaaaaaaaaa')

  return (
    <Container>
        <Wrapper>
            <Title>Add new property</Title>
            <Box>
                <Subtitle>Contact information</Subtitle>
                <Box.Inputs>
                    <Input onChange={onchange} value={dataa?.address} name='name'  placeholder='Property title' />
                    <Input placeholder='Category' />
                </Box.Inputs>
                <Box.Inputs>
                    <Box.Message  value={dataa?.description} onChange={onchange} name='description'  placeholder='Property Description'></Box.Message>
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Additional</Subtitle>
                <Box.Inputs>
                    <Input value={dataa?.houseDetails?.room} onChange={onChange} name='room' placeholder='Rooms' />
                    <Input value={dataa?.houseDetails?.beds} onChange={onChange} name='beds' placeholder='Beds' />
                    <Input value={dataa?.houseDetails?.bath} onChange={onChange} name='bath' placeholder='Baths' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input value={dataa?.houseDetails?.garage} onChange={onChange} name='garage' placeholder='Garages' />
                    <Input value={dataa?.houseDetails?.yearBuilt} onChange={onChange} name='yearBuilt' placeholder='Year bulid' />
                    <Input value={dataa?.houseDetails?.area} onChange={onChange} name='area' placeholder='Home area (sqft)' />
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Price</Subtitle>
                <Box.Inputs>
                    <Input value={dataa?.price}   onChange={onchange} name='price' placeholder='Price' />
                    <Input value={dataa?.salePrice}   onChange={onchange} name='salePrice' placeholder='Sale Price' />
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Location</Subtitle>
                <Box.Inputs>
                    <Input value={dataa?.country} onChange={onChange} name='country' placeholder='Regions' />
                    <Input value={dataa?.region} onChange={onChange} name='address' placeholder='Friendly address' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input  value={dataa?.zipCode} onChange={onChange} name='zipCode' placeholder='Zip Code' />
                </Box.Inputs>
                {
                    isLoaded ? (
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={12}
                        //   onLoad={onLoad}
                        //   onUnmount={onUnmount}
                          onClick={onMapClick}
                        >
                          <Marker position={center} />
                          <Marker position={center} />
                          <></>
                        </GoogleMap>
                    ) : <></>
                }
                <Box.Inputs>
                    <Input placeholder='Latidude' />
                    <Input placeholder='Longitude' />
                </Box.Inputs>

            </Box>
            <Box>
                <Subtitle>Media</Subtitle>
                <Box.Uploads>
                    <Description>Featured image</Description>
                    <Box.Inputs>sdi
                        <Box.Images />
                        <Box.Images />
                        <Box.Images />
                        <Box.Images />
                    </Box.Inputs>
                    <Upload {...props}>
                        <Button type='secondary' width={'100px'} >Upload</Button>
                    </Upload>
                </Box.Uploads>

                <Box.Uploads>
                    <Description>Gallery</Description>
                    <Upload {...props}>
                        <Button type='secondary' width={'100px'}>Upload</Button>
                    </Upload>
                </Box.Uploads>
                
                <Box.Uploads>
                    <Description>Attachment</Description>
                    <Upload {...props}>
                        <Button type='secondary' width={'100px'}>Upload</Button>
                    </Upload>
                </Box.Uploads>
                <Box.Inputs>
                    <Input placeholder='Video link' />
                </Box.Inputs>
                <Box.Inputs>
                    <Box.Message placeholder='Virtual tour' />
                </Box.Inputs>
                
            </Box>
            <Box>
                <Subtitle>Amenities</Subtitle>
                <Box.Table >
                    <tbody>
                    <tr>
                        <td>
                            <Checkbox >Air conditioning</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Lawn</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Dining Room</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Waterfront</Checkbox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox >Barbeque</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Microwave</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Fireplace</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Parking</Checkbox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox >Barbeque</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Microwave</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Fireplace</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Parking</Checkbox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox >Dryer</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Outdoor Shower</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Pets Allowed</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Doorman</Checkbox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox >Gym</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Refrigerator</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Unit Washer/Dryer</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Central Heating</Checkbox>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Checkbox >Laundry</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Stunning views</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Onsite Parking</Checkbox>
                        </td>
                        <td>
                            <Checkbox >Cleaning Service</Checkbox>
                        </td>
                    </tr>
                    </tbody>
                </Box.Table>
            </Box>
            <Box>
                <Subtitle>Select Energy Class</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Energy class' />
                    <Input placeholder='Energy Index in kWh/m2a' />
                </Box.Inputs>
            </Box>
            <Box.Wrappar>
                <Button onClick={onSubmit} size='large'  width={'280px'} type='primary'>Submit</Button>
            </Box.Wrappar>
        </Wrapper>
    </Container>
  )
};

export default AddNew