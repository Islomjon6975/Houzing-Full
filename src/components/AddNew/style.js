import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`

const Wrapper = styled.div`
    width: 1440px;
    padding: 48px 130px 24px 130px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 32px;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #0D263B;
`

const Box = styled.div`
    width: 100%;
    background: '#FFFFFF';
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 24px 30px;
    display: flex;
    flex-direction: column;
`

const Subtitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    margin-bottom: 44px;
`

Box.Wrappar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 90px;
`

export { Container, Wrapper, Title, Box, Subtitle}
