import React, { useState } from 'react'
import { Features } from '../Features';
import Map from '../Map'
import PropertyDetails from '../PropertyDetails';
import Schedule from '../Schedule';
import { Container, Left, Right, Wrapper } from './style'



export const LuxaryFamily = () => {

    const [state, setState] = useState();

  return (
    <Container>
        <Wrapper>
            <Left>
                <Left.Wrapper>
                    <Left.Title>Luxury Family Loft by Victoria Park</Left.Title>
                    <Left.Wrapper>
                        <Left.Icons>
                            <Left.Icon>
                                <Left.Share />
                            </Left.Icon>
                            <Left.Text>Share</Left.Text>
                        </Left.Icons>
                            
                        <Left.Icons>
                            <Left.Icon>
                                <Left.Heart />
                            </Left.Icon>
                            <Left.Text>Save</Left.Text>
                        </Left.Icons>
                    </Left.Wrapper>
                </Left.Wrapper>
                
                <Left.Wrapper>
                    <Left.Description>Quincy St, Brooklyn, NY, USA</Left.Description>
                    <Left.Wrapper>
                        <Left.SubDescription>$2,800/mo</Left.SubDescription>
                        <Left.Title>$7,500/mo</Left.Title>
                    </Left.Wrapper>
                </Left.Wrapper>

                <Left.Wrapper mt={25}>
                    <Left.Wrapper>
                        <Left.Icons>
                            <Left.Icon>
                                <Left.Share />
                            </Left.Icon>
                            <Left.Text>4 Beds</Left.Text>
                        </Left.Icons>

                        <Left.Icons>
                            <Left.Icon>
                                <Left.Bath />
                            </Left.Icon>
                            <Left.Text>4 Baths</Left.Text>
                        </Left.Icons>

                        <Left.Icons>
                            <Left.Icon>
                                <Left.Garage />
                            </Left.Icon>
                            <Left.Text>4 Garages</Left.Text>
                        </Left.Icons>

                        <Left.Icons>
                            <Left.Icon>
                                <Left.Ruler />
                            </Left.Icon>
                            <Left.Text>4 Ruler</Left.Text>
                        </Left.Icons>

                        <Left.Icons>
                            <Left.Icon>
                                <Left.Calendar />
                            </Left.Icon>
                            <Left.Text>4 Calendars</Left.Text>
                        </Left.Icons>

                    </Left.Wrapper>
                    <Left.Text>Est. Mortgage</Left.Text>

                </Left.Wrapper>
                {/* Description */}
                <Left.Subtitle>Description</Left.Subtitle>
                <Left.Description>
                    Occupying over 8,000 square feet, perched over 1,100 feet in the air with 
                    breathtaking panoramic 360-degree views of all of New York City and the 
                    surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely
                    reimagined by one of the most sought-after design houses in London and represents
                    an utterly unique opportunity to own a grobally significant property.
                </Left.Description>
                <Left.Description>
                    Occupying over 8,000 square feet, perched over 1,100 feet in the air with 
                    breathtaking panoramic 360-degree views of all of New York City and the 
                    surrounding tri-state area, The 82nd Floor at 432 Park Avenue has been completely
                    reimagined by one of the most sought-after design houses in London and represents
                    an utterly unique opportunity to own a grobally significant property.
                </Left.Description>
                <Left.ShowMore>Show More</Left.ShowMore>
                {/* Documents */}
                <Left.Subtitle>Documents</Left.Subtitle>
                <Left.Wrapper mt={15} mb={50}>
                    <Left.Wrapper>
                        <Left.DownloadIcon />
                        <Left.DownloadText>test_property.pdf</Left.DownloadText>
                        <Left.Download>Download</Left.Download>
                    </Left.Wrapper>
                    <Left.Wrapper>
                        <Left.DownloadIcon />
                        <Left.DownloadText>test_property.pdf</Left.DownloadText>
                        <Left.Download>Download</Left.Download>
                    </Left.Wrapper>
                    <Left.Wrapper>
                        <Left.DownloadIcon />
                        <Left.DownloadText>test_property.pdf</Left.DownloadText>
                        <Left.Download>Download</Left.Download>
                    </Left.Wrapper>
                </Left.Wrapper>
                <Left.Line />
                {/* Map */}
                <Map  />
                <Left.Line />
                {/* Property Details */}
                <PropertyDetails />
                {/* Features */}
                <Features />
                <Left.Line />
                {/* Schedule */}
                <Schedule />
            </Left>
            <Right>
dssd
            </Right>
        </Wrapper>
    </Container>
  )
}


export default LuxaryFamily