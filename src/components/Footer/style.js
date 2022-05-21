    import styled from 'styled-components';
    import {ReactComponent as location} from '../../assets/icons/locationn.svg'
    import {ReactComponent as call} from '../../assets/icons/call.svg'
    import {ReactComponent as email} from '../../assets/icons/email.svg'
    import {ReactComponent as facebook} from '../../assets/icons/facebook.svg'
    import {ReactComponent as linkedin} from '../../assets/icons/linkedin.svg'
    import {ReactComponent as instagram} from '../../assets/icons/instagram.svg'
    import {ReactComponent as twitter} from '../../assets/icons/twitter.svg'
    import {ReactComponent as logo} from '../../assets/icons/logo.svg'
    import {ReactComponent as backtop} from '../../assets/icons/backtop.svg'
    import { BackTop } from 'antd';

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        left: 0px;
        top: 4294px;
        background: #0D263B;
        `

    

    const Wrapper = styled.div`
        width: 1440px;
        padding: 48px 130px 24px 130px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 40px 0 20px 0;

        }
        

    `

    Wrapper.Column = styled.div`
        @media (max-width: 768px) {
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `

    Wrapper.Column2 = styled.div`
        
    `

    Wrapper.Column3 = styled.div`
        
    `

    Wrapper.Column4 = styled.div`
        
    `

    const Title = styled.div`
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #FFFFFF;
        margin-bottom: 32px;
        @media (max-width: 768px) {
            font-size: 17px;
        }
    `

    const Section = styled.div`
        display: flex;
        margin-bottom: 20px;
        @media (max-width: 768px) {
            width: 100%;
            font-size: 13px;
            display: flex;
            justify-content: center;
        }
    `

    const Description = styled.div`
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        max-width: 300px;
        @media (max-width: 768px) {
            font-size: 13px;
            max-width: 250px;

        }
    `

    const Icons = styled.div``

    const Socials = styled.div`
        display: flex;
        align-items: center;
        gap: 37px;
        margin-top: 42px;
        @media (max-width: 768px) {
            margin-top: 20px;
        }
    `

    Icons.Location = styled(location)`
        margin-right: 22px;
        width: 18px;
        height: 18px;
        cursor: pointer;
        transition: all .3s ease;
        :active{
            transform: scale(0.98);
        }
        @media (max-width: 768px) {
            width: 17px;
            height: 17px;
            margin-right: 18px;
        }
    `
    Icons.Call = styled(call)`
        margin-right: 22px;
        cursor: pointer;
        transition: all .3s ease;
        :active{
            transform: scale(0.98);
        }
        @media (max-width: 768px) {
            width: 17px;
            height: 17px;
            margin-right:18px;
        }
    `
    Icons.Email = styled(email)`
        margin-right: 22px;
        cursor: pointer;
        transition: all .3s ease;
        :active{
            transform: scale(0.98);
        }
        @media (max-width: 768px) {
            width: 17px;
            height: 17px;
            margin-right: 18px;
        }
    `

    Icons.Wrapper = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        :hover{
            background-color: #253C4F;
            border-radius: 3px;
        }
        :active{
            opacity: 0.7;
        }
    `

    Icons.Facebook = styled(facebook)`
        cursor: pointer;
        transition: all .3s ease;
        width: 36px;
        
        :active{
            transform: scale(0.98);
        }
    `

    Icons.Twitter = styled(twitter)`
        cursor: pointer;
        transition: all .3s ease;
        :active{
            transform: scale(0.98);
        }
    `
        Icons.Instagram = styled(instagram)`
        cursor: pointer;
        transition: all .3s ease;
        :active{
            transform: scale(0.98);
        }
    `
    Icons.Linkedin = styled(linkedin)`
        cursor: pointer;
        transition: all .3s ease;
        :active{
            transform: scale(0.98);
        }
    `

    const Bottom = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 16px 0;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            height: 148px;
            padding: 24px 0;
        }
    `

    Bottom.Container = styled.div`
        position: relative;
        max-width: 1440px;
        width: 100%;
        padding: 0 130px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            height: 148px;
            padding: 0 50px ;
            text-align: center;
        }

    `

    Bottom.Wrapper = styled.div`
        display: flex;
        align-items: center;
    `

    const Logo = styled(logo)`
        margin-right: 12px;
        @media (max-width: 768px) {
            width: 25px;
            height: 25px;
            margin-right: 6px;
        }

    `

    const LogoTitle = styled.div`
        margin-left: 11px;
        font-size: 20px;
        font-weight: 500;
        color: white;
        @media (max-width: 768px) {
            font-size: 19px;
        }
    `

    const BottomDesctiption = styled.div`
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        @media (max-width: 768px) {
            font-size: 13px;
        }
    `

    const Top = styled(BackTop)`
        width: 43px;
        height: 43px;
        background: #0061DF;
        border-radius: 3px;
        position: absolute;
        top: 50%;
        right: 11px;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .4s ease;
        :active{
            opacity: 0.8;
        }
        @media (max-width: 768px) {
            width: 35px;
            height: 35px;
            position: absolute;
            bottom: 16px;
            right: 16px;
            transform: translate(0, 0);
        }
    `

    Top.Icon = styled(backtop)``
    export { Container, Bottom, Wrapper, Title, Top, Socials, Description, Icons, Section, Logo, LogoTitle,BottomDesctiption }