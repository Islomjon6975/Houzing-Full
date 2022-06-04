import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    margin-bottom: 48px;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    margin-bottom: 24px;
`

const Wrapper = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
`

Wrapper.Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

Wrapper.Box = styled.div`
    display: flex;
    align-items: center;
`

const Subtitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0D263B;
`

const Desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    margin-right: 8px;
`

export { Container, Title, Wrapper, Subtitle, Desc, }