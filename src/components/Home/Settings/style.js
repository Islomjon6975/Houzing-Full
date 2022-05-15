import styled from 'styled-components';
// import {ReactComponent as address} from '../../../assets/icons/address.svg'
// import {ReactComponent as status} from '../../../assets/icons/status.svg'
// import {ReactComponent as price} from '../../../assets/icons/price.svg'
// import {ReactComponent as advanced} from '../../../assets/icons/settings.svg'


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



export { Container, Wrapper,};

