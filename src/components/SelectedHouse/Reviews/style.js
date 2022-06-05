import styled from 'styled-components';
import {ReactComponent as star} from '../../../assets/icons/star.svg'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 48px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: ${({mt}) => mt && `${mt}px`};
    margin-bottom: ${({mb}) => mb && `${mb}px`};
    gap: ${({gap}) => gap ? `${gap}px` : '100px'};

`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    margin-bottom: 25px;
`

const Desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
`

Card.Img = styled.img`
    width: 52px;
    height: 52px;
    margin-bottom: 10px;
`

Card.Name = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0D263B;
    margin-bottom: 4px;
`

Card.Star = styled(star)``

Card.Subdesc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #696969;
    white-space: nowrap;
`

export { Container, Wrapper, Title, Desc, Card }