import React from 'react'
import { Container, Img, Info, InfoWrapper, Icons, Footer, User } from './style'
import noimg from '../../assets/imgs/noimage.png'

export const Card = ({ info, mr, mb }) => {
  return (
    <Container mr={mr} mb={mb}>
        <Img src={info?.img  || noimg} />
        <InfoWrapper>
            <User>
                <User.Img src={info?.img || noimg} />
            </User>
            <div className='subtitle'>New Apartment Nice Wiew</div>
            <div className="description">Quincy St, Brooklyn, NY, USA</div>
        
            <Info>
                <Info.Detail>
                    <Icons.Bed />
                    <div className="description">{info?.beds || 0} Beds</div>
                </Info.Detail>
                <Info.Detail>
                    <Icons.Bath />
                    <div className="description">{info?.baths || 0} Baths</div>
                </Info.Detail>
                <Info.Detail>
                    <Icons.Garage />
                    <div className="description">{info?.garages || 0} Garages</div>
                </Info.Detail>
                <Info.Detail>
                    <Icons.Ruler />
                    <div className="description">{info?.sq || 0} Sq Ft</div>
                </Info.Detail>
            </Info>
        </InfoWrapper>
        <Footer>
            <Info.Detail>
                <div className="description deleted">
                    $2,800/mo
                </div>
                <div className="subtitle">$7,500/mo</div>
            </Info.Detail>
            <Info.Detail className='endToRight'>
                <div className='center'>
                    <Icons.Resize />
                    <Icons.Love />
                </div>
            </Info.Detail>
        </Footer>
    </Container>
  )
}

export default Card


