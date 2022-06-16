import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

`

const Wrapper = styled.div`
    max-width: 1440px;
    padding: 48px 130px 24px 130px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 768px) {
        padding: 40px 30px 20px 30px;
    }
    @media (max-width: 550px) {
        padding: 35px 20px 16px 20px;
    }
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
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    gap: 23px;
`

const Subtitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
`

Box.Wrappar = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 90px;
`

Box.Inputs = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width:860px) {
        flex-direction: column;
    }
`

Box.Message = styled.textarea`
    width: 100%;
    height: 100px;
    resize: none;
    border: 1px solid #E6E9EC;
    outline: none;
    padding: 15px;
`

const Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
`

Box.Images = styled.div`
    width: 150px;
    height: 150px;
    background: #C4C4C4;
    border-radius: 3px;
`

Box.Uploads = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

Box.Table = styled.table`
    height: 300px;
    @media (max-width: 768px) {
        td{
            display: block;
        }   
    }
`

export { Container, Wrapper, Title, Box, Subtitle, Description}
