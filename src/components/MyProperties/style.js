import styled from 'styled-components';
import {ReactComponent as edit} from '../../assets/icons/edit.svg'
import {ReactComponent as trash} from '../../assets/icons/trash.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 96px;
    min-height: calc(100vh - 80px);
`

const Wrapper = styled.div`
    max-width: 1440px;
    padding: 48px 130px 24px 130px;
    width: 100%;
    display: flex;
    flex-direction: column;
    .btnn{
        display: none;
    }
    @media (max-width: 1200px) {
        padding: 40px 30px 20px 30px;
    }
    @media (max-width: 550px) {
        padding: 32px 15px 16px 15px;
    }
`

Wrapper.Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    
    @media (max-width: 1200px) {
        .btn{
            display: inline-block;
            width: 100px;
            height: 20px;
        }
    }
    
`

const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #0D263B;
    margin: 32px 0;
    text-align: left;
    @media (max-width: 1200px) {
        font-size: 24px;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 24px 30px;
    gap: 20px
`

Box.Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
    width: 100%;
    gap: 5px;
    @media (max-width: 1200px) {
        display: flex;
        justify-content: space-between;
    }
`

Box.Wrapper = styled.div`
    display: flex;
    grid-gap: 16px;
    @media (max-width: 1200px) {
        display: ${({none}) => none && 'none'};
    }
`

const Subtitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    width: 100%;
    text-align: center;
    text-align: ${({last}) => last && 'right'};
    text-align: ${({first}) => first && 'left'};
`

const Image = styled.div`
    position: relative;
    width: 113px;
    height: 113px;
    background: #C4C4C4;
    border-radius: 3px;
`

Image.Img = styled.img`
    width: 100%;
    height: 100%;
`

Image.Button = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0061DF;
    border-radius: 3px;
    padding: 5px 12px;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 13px;
    color: #FFFFFF;
    :active{
        transform: scale(0.98);
    }
`

const TexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

TexContainer.Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
    display: flex;
    align-items: center;
`

TexContainer.Sale = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 12px;
    background: #0D263B;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    font-size: 10px;
    margin-left: 30px;
    :active{
        transform: scale(0.98);
    }
    @media (max-width: 1200px) {
        display: none;
    }

`

TexContainer.Desc = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    width: 100%;
`

TexContainer.DeletedPrice = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: line-through;
    color: #696969;
`

TexContainer.Price = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0D263B;
`


TexContainer.Status = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
     @media (max-width: 1200px) {
        display: none;
    }
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    gap: 10px;
    @media (max-width: 600px) {
       flex-direction: column;
    }
`

Icons.Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #F6F8F9;
    border-radius: 50%;
    :active{
        transform: scale(0.98);
    }
    
`

Icons.Edit = styled(edit)`

`

Icons.Trash = styled(trash)`

`

export { Wrapper, Container, Title, Box, Subtitle, Image, TexContainer, Icons }