import styled from 'styled-components'
import {ReactComponent as house} from '../../../assets/icons/house.svg'
import {ReactComponent as apartment} from '../../../assets/icons/apartment.svg'
import {ReactComponent as office} from '../../../assets/icons/office.svg'
import {ReactComponent as villa} from '../../../assets/icons/villa.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 95px;
  margin-bottom: 55px;
`;

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 0 130px;
  
`;
const Cards = styled('div')`
  display: flex;
  width: 1440px;
  margin-top: 32px;
  justify-content: space-between;
  gap: 10px;
  max-width: 1440px;
  padding: 0 130px;
`;

const ArrowLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -100%);
  width: 45px;
  height: 45px;
  color: black;
  background: white;
  opacity: 0.5;
  padding-left: 10px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 0.7;
  }
`;

const ArrowRight = styled(ArrowLeft)`
  left: 50px;
  transform: translate(50%, -100%);
  padding-left: 0;
  padding-right: 10px;
`;


const Col = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width:300px;
  min-width: 280px;
  height: 350px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  margin-right: 20px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  overflow: hidden;
  transition: all .9s ease;
  :hover {
    .img-categories{
      transform: scale(1.1);
    }
  }
`

Col.Img = styled.img`
  width: 100%;
  height: 100%;
`

const ColItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

ColItem.Title = styled.div` 
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #FFFFFF;
  margin-top: 24px;
`

ColItem.House = styled(house)`

`
ColItem.Apartment = styled(apartment)`

`
ColItem.Office = styled(office)`

`
ColItem.Villa = styled(villa)`

`

export { Container, Cards, ArrowLeft, Wrapper, ArrowRight, Col, ColItem };
