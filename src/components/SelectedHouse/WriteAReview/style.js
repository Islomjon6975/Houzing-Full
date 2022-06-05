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
    width: ${({width}) => width ? `${width}px` : '100%'};
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

const Star = styled(star)``

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 2px solid #E6E9EC;
`

const Message = styled.textarea`
    width: 100%;
    height: 100px;
    border: none;
    border-bottom: 2px solid #E6E9EC;
    margin-top: 24px;
    resize: none;
`



export { Container, Wrapper, Title, Desc, Star, Input, Message }