import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Container, Description, Subtitle, Title, Wrapper } from './style'

export const Map = () => {

    const containerStyle = {
        width: '100%',
        height: '450px'
    };
    
    const center = {
        lat: 41.311081,
        lng: 69.240562
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
                <Description>329 Queensberry Street</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>City:</Subtitle>
                <Description>Jersey City</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Area:</Subtitle>
                <Description>Greenville</Description>
            </Wrapper>
        </Wrapper>
        <Wrapper mt={24} mb={24}>
            <Wrapper>
                <Subtitle>State/County: </Subtitle>
                <Description>Washington</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Zip:</Subtitle>
                <Description>365448</Description>
            </Wrapper>
            <Wrapper>
                <Subtitle>Country:</Subtitle>
                <Description>United States</Description>
            </Wrapper>
        </Wrapper>
        {
            isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                  { /* Child components, such as markers, info windows, etc. */ }
                  <></>
                </GoogleMap>
            ) : <></>
        }
    </Container>
  )
}

export default Map