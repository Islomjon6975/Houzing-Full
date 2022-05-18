import styled from 'styled-components';
import {ReactComponent as home} from '../../../assets/icons/home.svg'
import {ReactComponent as message} from '../../../assets/icons/message.svg'
import {ReactComponent as phone} from '../../../assets/icons/phone.svg'
import {ReactComponent as location} from '../../../assets/icons/location.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
    background: #F5F7FC;
`

const Wrapper = styled.div`
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 130px;
`

const Section = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
    gap: 70px;
`

Section.Item = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Icons = styled.div``

Icons.Home = styled(home)`
    margin-bottom: 24px;
    cursor: pointer;
`
Icons.Location = styled(location)`
    margin-bottom: 24px;
    cursor: pointer;
`
Icons.Phone = styled(phone)`
    margin-bottom: 24px;
    cursor: pointer;
`
Icons.Message = styled(message)`
    margin-bottom: 24px;
    cursor: pointer;
`

export { Container, Wrapper, Section, Icons };