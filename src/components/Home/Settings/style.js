import styled from 'styled-components';
import {ReactComponent as address} from '../../../assets/icons/address.svg'
import {ReactComponent as status} from '../../../assets/icons/status.svg'
import {ReactComponent as price} from '../../../assets/icons/price.svg'
import {ReactComponent as advanced} from '../../../assets/icons/settings.svg'
import { Input, Button, Tooltip } from 'antd';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    @media (max-width: 768px) {
        display: none;
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 1440px;
    /* background-color: red; */
    width: 100%;
    height: 100%;
    gap: 20px;
`

const Position = styled.div`
    position: relative;
    flex: 1;

`

const Address = styled(address)`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    cursor: pointer;
`

const Inputt = styled(Input)`
    padding-left: 50px;
    height: 44px;
    flex: 1;
    ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #0D263B;
    }
`

const Status = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 44px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #0D263B;
    gap: 10px;
`

Status.Icon = styled(status)`
    cursor: pointer;
`


const Price = styled(price)`
    cursor: pointer;
`


const Advanced = styled(advanced)`
    cursor: pointer;
`

const Search = styled(Button)`
    width: 180px;
`

export { Container, Wrapper, Address, Position, Inputt, Status, Price,Search,  Advanced, };

