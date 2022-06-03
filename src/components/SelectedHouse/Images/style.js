import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
    .ant-modal-content{
        width: 1000px
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 1440px;
    padding: 0 135px;
    width: 100%;
`

const ImageContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;  
    grid-gap: 20px;
`

const Left = styled.div`
`

Left.img = styled.img`
    width: 100%;
    height: 100%;
`

const Right = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 190px 190px;
    grid-gap: 20px;
`

Right.Img = styled.img`
    width: 100%;
    height: 100%;
`

Right.Count = styled.div`
    position: relative;
    /* background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)); */
    
`

Right.Number = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
`


const Cards = styled('div')`
  display: flex;
  width: 1440px;
  margin-top: 32px;
  justify-content: space-between;
  gap: 10px;
  max-width: 1440px;
  padding: 0 130px;
  background-color: red;
`;

const ArrowLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 50%;
  right: 20px;
  transform: translate(-50%, -100%);
  width: 45px;
  height: 45px;
  color: black;
  background: white;
  opacity: 0.5;
  padding-left: 10px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 0.7;
  }
`;

const ArrowRight = styled(ArrowLeft)`
  left: 50px;
  transform: translate(50%, -100%);
  padding-left: 0;
  padding-right: 10px;
`;

const Imgg = styled.img`
    width: 580px;
    height: 400px;
`


const ModalImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
`

ModalImage.Img = styled.img`
  width: 100%;
  height: 400px;
`

export { Container, ModalImage, Wrapper, ImageContainer ,Left, Right, Cards, ArrowLeft, ArrowRight, Imgg}