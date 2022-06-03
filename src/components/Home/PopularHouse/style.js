import styled from 'styled-components'
import img from '../../../assets/imgs/home1.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 98px;
`

const Wrapper = styled.div`
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 135px;
    @media (max-width: 768px) {
        padding: 0;
        width: 100%;
    }
`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;
    width: 620px;
    margin-bottom: 48px;
`

export { Container, Wrapper, Title }