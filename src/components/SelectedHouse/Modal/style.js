import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    border: 1px solid #E6E9EC;
    border-radius: 3px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${({top}) => !top && 'center'};
    margin-top: ${({mt}) => mt && `${mt}px`};
`

const Img = styled.img`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
`

const Desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;

`

const Input = styled.input`
    height: 40px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 2px solid #E6E9EC;
    margin-top: 20px;
`

const Message = styled.textarea`
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 2px solid #E6E9EC;
    resize: none;
`

const Checkbox = styled.input`
    width: 38px;
    height: 38px;
    background: #FFFFFF;
    border: 2px solid #E6E9EC;
    margin-right: 8px;
`

export { Container, Wrapper, Img, Title, Desc, Input, Message, Checkbox }