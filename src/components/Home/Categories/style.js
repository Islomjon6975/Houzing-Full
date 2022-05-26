import styled from 'styled-components'

import {ReactComponent as arrowleft} from '../../../assets/icons/arrow-left.svg';
import {ReactComponent as arrowright} from '../../../assets/icons/arrow-right.svg';
import {ReactComponent as house} from '../../../assets/icons/house.svg';
import {ReactComponent as apartment} from '../../../assets/icons/apartment.svg';
import {ReactComponent as office} from '../../../assets/icons/business-and-trade.svg';
import {ReactComponent as villa} from '../../../assets/icons/villa.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 96px;
    margin-bottom: 48px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    .alice-carousel__prev-btn, .alice-carousel__next-btn{
        display: none;
    }
    margin-top: 52px;
`

const Carousel = styled.div`
    display: flex;
    width: 1440px;
    padding: 0 130px;
    gap: 10px;
    @media (max-width: 768px) {
        display: none;
    }
`

const Cards = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1440px;
    padding: 0 130px;
    @media (max-width: 768px) {
        display: flex;
        padding: 0;
    }
`

const ArrowLeft = styled(arrowright)`
    top: 50%;
    right: 20px;
    transform: translate(-50%, -100%);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    padding: 12px;
    color: black;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    cursor: pointer;
    :hover{
        opacity: 0.97;
    }
    & path {
        fill: #0d263b;
    }
    @media (max-width: 768px) {
        width: 27px;
        height: 27px;
        padding: 8px;
    }
    opacity: 0.5;
    padding-left: 10px;
    box-shadow: 0px 10px 50px rgba(13,38,59,0.1);
    filter: drop-shadow(0px 20px 38px rgba(0,0,0,0.06))
        drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06))
        drop-shadow(0px 8px 15px rgba(0,0,0,0.06));
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    :hover{
        opacity: 1;
    }
    :active{
        opacity: 0.7;
    }
`

const ArrowRight = styled(arrowleft)`
    position: absolute;
    top: 50%;
    right: 120px;
    transform: translate(-50%, -100%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    padding: 12px;
    color: black;
    background-color: white;
    opacity: 0.5;
    border-radius: 50%;
    cursor: pointer;
    :hover{
        opacity: 0.97;
    }
    & path {
        fill: #0d263b;
    }
    @media (max-width: 768px) {
        width: 27px;
        height: 27px;
        padding: 8px;
    }
    opacity: 0.5;
    padding-left: 10px;
    box-shadow: 0px 10px 50px rgba(13,38,59,0.1);
    filter: drop-shadow(0px 20px 38px rgba(0,0,0,0.06))
        drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06))
        drop-shadow(0px 8px 15px rgba(0,0,0,0.06));
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    :hover{
        opacity: 1;
    }
    :active{
        opacity: 0.7;
    }
    left: 20px;
    transform: translate(50%, -100%);
    padding-left: 0;
    padding-right: 10px;
`


const Col = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 350px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));

    box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
    border-radius: 3px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`

Col.House = styled(house)``
Col.Apartment = styled(apartment)``
Col.Office = styled(office)``
Col.Villa = styled(villa)``

export { Container, Wrapper, Carousel, ArrowLeft, ArrowRight, Cards, Col }