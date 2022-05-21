import styled from 'styled-components';
import {ReactComponent as telegraph} from '../../assets/icons/telegraph.svg'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    padding: 110px 0 110px 0;
`

const Img = styled.img`
    width: 800px;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #0D263B;
    margin-bottom: 17px;
    margin-top: 70px;
`

const Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #696969;
`

const Section = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 17px;
`

const Back = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: underline;
    color: #0061DF;
`

const Telegraph = styled(telegraph)``

export { Container, Wrapper, Img, Title, Description, Section, Telegraph, Back }