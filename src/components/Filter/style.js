import styled from 'styled-components';
import {ReactComponent as address} from '../../assets/icons/address.svg'
import {ReactComponent as settings} from '../../assets/icons/settings.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'


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
    padding: 0 130px;
    width: 100%;
    height: 100%;
    gap: 20px;
`

const Icon = styled.div``

Icon.Home = styled(address)`
    margin-right: 8px;
    margin-top: 6px;
`

Icon.Settings = styled(settings)`
    margin-right: 8px;
`
Icon.Search = styled(search)`
    margin-right: 8px;
`

const Advanced = styled.div`
    width: 920px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 30px 30px 0px 30px;
    
`

Advanced.Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
    margin-bottom: 10px;
`

Advanced.Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 20px;
    margin-bottom: 20px;
`

const Select = styled.select`
    height: 44px;
    border: 1px solid #E6E9EC;
    padding: 0 10px;
    outline: none;
`



export { Container, Wrapper, Icon, Advanced, Select};

