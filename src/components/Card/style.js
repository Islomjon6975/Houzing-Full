import styled from 'styled-components';
import {ReactComponent as bed} from '../../assets/icons/bed.svg'
import {ReactComponent as bath} from '../../assets/icons/bath.svg'
import {ReactComponent as garage} from '../../assets/icons/car.svg'
import {ReactComponent as ruler} from '../../assets/icons/ruler.svg'
import {ReactComponent as resize} from '../../assets/icons/resize.svg'
import {ReactComponent as love} from '../../assets/icons/love.svg'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #E6E9EC;
    border-radius: 3px;
    background-color: #FFFFFF;
    max-width: 380px;
    min-width: ${({width}) => width ? `${width}px` : '280px'};
    height: 430px;
    margin-right: ${({ mr }) => mr && `${mr}px`};
    margin-bottom: ${({ mb }) => mb && `${mb}px`};
    transition: all .4s ease;
    :hover{
        transform: scale(1.03);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 220px;
    min-height: 220px;
    max-height: 220px;
`

const InfoWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 25px 25px 0px 20px;
    border-top: 1px solid #e6e9ec;
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0px;
`

Info.Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Icons = styled.div``

Icons.Bed = styled(bed)``
Icons.Bath = styled(bath)``
Icons.Garage = styled(garage)``
Icons.Ruler = styled(ruler)``
Icons.Resize = styled(resize)`
    width: 35px;
    height: 35px;
    padding: 10px;
    cursor: pointer;
    :active{
        transform: scale(0.97);
    }
`
Icons.Love = styled(love)`
    border-radius: 50%;
    margin-left: 20px;
    width: 35px;
    height: 35px;
    padding: 10px;
    cursor: pointer;
    background-color: ${({bg}) => bg || '#F6F8F9'} ;
    path{
        fill: white;
    }
    :active{
        transform: scale(0.97);
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #E6E9EC;
    padding: 0 20px;
    height: 100%;
`

const User = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 46px;
    height: 46px;
    right: 20px;
    top: -23px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
    overflow: hidden;
`

User.Img = styled.img`
    width: 43px;
    height: 43px;
    object-fit: cover;
`

export { Container, Img, InfoWrapper, Info, Icons, Footer, User }


