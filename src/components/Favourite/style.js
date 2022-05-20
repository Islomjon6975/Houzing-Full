import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`

const Wrapper = styled.div`
    max-width: 1440px;
    width: 100%;
    padding: 64px 130px 96px 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        padding: 32px 30px 64px 30px;
    }
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-top: 64px;
    @media (max-width: 768px) {
        width: 100%;
        padding: 64px 0px 96px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 32px;
    }

`

export { Container, Wrapper, Cards }