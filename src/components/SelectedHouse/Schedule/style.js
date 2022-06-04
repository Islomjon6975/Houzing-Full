import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    margin-top: 48px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: ${({mt}) => mt && `${mt}px`};
    margin-bottom: ${({mb}) => mb && `${mb}px`};
`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    margin-bottom: 50px;
`

const Subtitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #0D263B;
    margin-bottom: 24px;
    margin-top: 48px;
`

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
    outline: none;
    border-bottom: 2px solid #E6E9EC;
    resize: none;
`

export { Container, Wrapper, Title, Input, Subtitle, Message }