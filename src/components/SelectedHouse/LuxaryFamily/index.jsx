import React from 'react'
import { Container, Left, Right, Wrapper } from './style'

export const LuxaryFamily = () => {
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


            </Left>
            <Right>
dssd
            </Right>
        </Wrapper>
    </Container>
  )
}


export default LuxaryFamily