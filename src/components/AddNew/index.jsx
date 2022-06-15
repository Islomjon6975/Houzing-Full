import React from 'react'
import Button from '../Generic/Button'
import Input from '../Generic/Input'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Box, Container, Description, Subtitle, Title, Wrapper } from './style'
import { useState } from 'react';
import { Upload } from 'antd';
import Checkbox from '../Generic/Checkbox';

export const AddNew = () => {

    const [state, setState] = useState({});


    const containerStyle = {
        width: '100%',
        height: '600px'
    };
    
    const center = {
        lat: 41.311081,
        lng:  69.240562,
    };
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4"
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
        console.log(e?.latLng?.lat(), 'lat');
        console.log(e?.latLng?.lng(), 'lng');
      }
    

  return (
    <Container>
        <Wrapper>
            <Title>Add new property</Title>
            <Box>
                <Subtitle>Contact information</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Property title' />
                    <Input placeholder='Category' />
                </Box.Inputs>
                <Box.Inputs>
                    <Box.Message placeholder='Property Description'></Box.Message>
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Additional</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Rooms' />
                    <Input placeholder='Beds' />
                    <Input placeholder='Baths' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input placeholder='Garages' />
                    <Input placeholder='Year bulid' />
                    <Input placeholder='Home area (sqft)' />
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Price</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Price' />
                    <Input placeholder='Sale Price' />
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Location</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Regions' />
                    <Input placeholder='Friendly address' />
                </Box.Inputs>
                {/* <Box.Inputs>
                    <Input placeholder='Map location' />
                </Box.Inputs> */}
                {
                    isLoaded ? (
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={10}
                          onLoad={onLoad}
                          onUnmount={onUnmount}
                          onClick={onMapClick}
                        >
                          { /* Child components, such as markers, info windows, etc. */ }
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
                    <Box.Inputs>
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
                <Button size='large'  width={'280px'} type='primary'>Submit</Button>
            </Box.Wrappar>
        </Wrapper>
    </Container>
  )
}

export default AddNew