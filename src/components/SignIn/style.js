import styled from 'styled-components'
import { Input, Form, Checkbox } from 'antd'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 1440px;
    padding: 64px 130px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        padding: 64px 0;
    }
`

const Formm = styled(Form)`
    width: 580px;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 24px 30px 48px 30px;
    @media (max-width: 768px) {
        width: 95%;
    }

`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    margin-bottom: 25px;
`

const Inputt = styled(Input)`
    width: 100%;
    margin-bottom: 20px;
    border: none;
    border-bottom: 2px solid #E6E9EC;
    outline: none;
`

const InputPassword = styled(Input.Password)`
    width: 100%;
    margin-bottom: 15px;
    border: none;
    border-bottom: 2px solid #E6E9EC;
    outline: none;
`

const Checkboxx = styled(Checkbox)`
    width: 100%;
`

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-betweena;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
`

const Forgot = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #0061DF;
    cursor: pointer;
    transition: all .4s ease;
    :active{
        transform: scale(0.97);
    }

`


export { Container, Wrapper, Inputt, Formm, InputPassword,  Title, Checkboxx, Section, Forgot }