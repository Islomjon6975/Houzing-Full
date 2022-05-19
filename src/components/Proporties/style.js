import styled from 'styled-components'
import { Select } from 'antd';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (max-width: 768px) {
        margin-top: 70px;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    padding: 0 130px;
    padding-top: 64px;
    @media (max-width: 768px) {
        padding: 0;
    }
`

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 70px;
`

CountWrapper.Sort = styled(Select)`
    border: none;
    outline: none;
    .ant-select:not(.ant-select-customize-input) .ant-select-selector{
        border: none;
        outline: none;
    }
`

const Cards = styled.div`
    width: 100%;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap : 20px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`




export { Container, Wrapper, CountWrapper, Cards }