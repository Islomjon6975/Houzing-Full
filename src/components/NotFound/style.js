import styled from 'styled-components';
import {ReactComponent as telegraph} from '../../assets/icons/telegraph.svg'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 110px 0 110px 0;
    @media (max-width: 768px){
        width: 100%;
        padding: 90px 0;
    }
`;

const Img = styled.img`
    width: 800px;
    @media (max-width: 768px){
        width: 80%;
    }
`;

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color: #0D263B;
    margin-bottom: 17px;
    margin-top: 70px;
    @media (max-width: 768px){
        font-size: 23px;
        margin-top: 50px;
        margin-bottom: 14px;
    }
`;

const Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #696969;
    @media (max-width: 768px){
        font-size: 13px;
    }
`;

const Section = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 17px;
    width: 560px;
    @media (max-width: 768px){
        justify-content: center;
        flex-direction: column;
        margin-top: 25px;
        margin-bottom: 14px;
        width: 400px;

    }
`;

const Back = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-decoration-line: underline;
    color: #0061DF;
`

const Telegraph = styled(telegraph)`
    @media (max-width: 768px){
        width: 18px;
        height: 18px;

    }
`;

export { Container, Wrapper, Img, Title, Description, Section, Telegraph, Back };