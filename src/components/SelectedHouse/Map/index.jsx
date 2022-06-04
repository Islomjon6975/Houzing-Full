import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Container, Description, Subtitle, Title, Wrapper } from './style'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const {REACT_APP_BASE_URL: url} = process.env;

export const Map = () => {

    const [state, setState] = useState({});
    const { id } = useParams();

    useQuery(
        'get data', 
        () => {
            return fetch(`${url}/v1/houses/${id.replace(':', '')}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then((res) => res.json())
        }, 
        {
            onSuccess: (res) => {
                setState(res?.data)
            },
            keepPreviousData: true, // bu browserdan tashqariga chiqib yana kirsa, yana yurishni oldini olish uchun
            refetchOnWindowFocus: false, // bu ham focus bolgan vaqti malumot olib kelish
        })

        // console.log(state, 'aaaaaaaaaaaaaaa');
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
    
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

  return (
    <Container>
        <Title>Location</Title>
        <Wrapper>
            <Wrapper>
                <Subtitle>Address:</Subtitle>
                <Description>{state?.address ? state?.address : 'No address' }</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>City:</Subtitle>
                <Description>{state?.city ? state?.city : 'No zipCode' }</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Area:</Subtitle>
                <Description></Description>
            </Wrapper>
        </Wrapper>
        <Wrapper mt={24} mb={24}>
            <Wrapper>
                <Subtitle>State/County: </Subtitle>
                <Description>{state?.region ? state?.region : 'No zipCode' }</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Zip:</Subtitle>
                <Description>{state?.zipCode ? state?.zipCode : 'No zipCode' }</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Country:</Subtitle>
                <Description>{state?.country ? state?.country : 'No zipCode' }</Description>
            </Wrapper>
        </Wrapper>
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
    </Container>
  )
}

export default Map