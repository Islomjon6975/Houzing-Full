import React from 'react'
// import Button from '../Generic/Button'
import Input from '../Generic/Input'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Box, Container, Description, Subtitle, Title, Wrapper } from './style'
import { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import Checkbox from '../Generic/Checkbox';

export const AddNew = () => {

    const [state, setState] = useState({});


    const containerStyle = {
        width: '100%',
        height: '450px'
    };
    
    const center = {
        lat: state?.location?.latitude,
        lng: state?.location?.longitude,
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
    

  return (
    <Container>
        <Wrapper>
            <Title>Add new property</Title>
            <Box>
                <Subtitle>Contact information</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Property title*' />
                    <Input placeholder='Type' />
                </Box.Inputs>
                <Box.Inputs>
                    <Box.Message placeholder='Property Description*'></Box.Message>
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Additional</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Property ID' />
                    <Input placeholder='Parent property' />
                    <Input placeholder='Status' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input placeholder='Label' />
                    <Input placeholder='Material' />
                    <Input placeholder='Rooms' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input placeholder='Beds' />
                    <Input placeholder='Baths' />
                    <Input placeholder='Garages' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input placeholder='Year bulid' />
                    <Input placeholder='Home area (sqft)' />
                    <Input placeholder='Lot dimensions' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input placeholder='Lot area (sqft)' />
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Price</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Price ($)' />
                    <Input placeholder='Price Prefix' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input placeholder='Price Suffix' />
                    <Input placeholder='Price Custom' />
                </Box.Inputs>
            </Box>
            <Box>
                <Subtitle>Location</Subtitle>
                <Box.Inputs>
                    <Input placeholder='Regions' />
                    <Input placeholder='Friendly address' />
                </Box.Inputs>
                <Box.Inputs>
                    <Input placeholder='Map location' />
                </Box.Inputs>
                {
                    isLoaded ? (
                        <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                        //   onLoad={onLoad}
                        //   onUnmount={onUnmount}
                        >
                            {
                            state?.location?.latitude && state?.location?.longitude ?  (
                                <>
                                    <Marker position={center} />
                                    <Marker position={{
                                        lat: state?.location?.latitude + 1,
                                        lng: state?.location?.longitude - 1,
                                    }} />
                                </>
                            ) : <GoogleMap mapContainerStyle={containerStyle}
                                    center={{
                                        lat: 41.311081,
                                        lng:  69.240562,
                                    }}
                                    zoom={15} />
                            }
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
                        <Button size='large'>Upload</Button>
                    </Upload>
                </Box.Uploads>

                <Box.Uploads>
                    <Description>Gallery</Description>
                    <Upload {...props}>
                        <Button size='large'>Upload</Button>
                    </Upload>
                </Box.Uploads>
                
                <Box.Uploads>
                    <Description>Attachment</Description>
                    <Upload {...props}>
                        <Button size='large'>Upload</Button>
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