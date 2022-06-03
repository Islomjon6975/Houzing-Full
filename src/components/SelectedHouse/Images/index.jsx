import React, { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Cards, Container, ImageContainer, Imgg, Left, Right, Wrapper } from './style'
import AliceCarousel from 'react-alice-carousel'

import { Modal, Button } from 'antd';
import img1 from '../../../assets/imgs/home1.png'
import img2 from '../../../assets/imgs/home2.png'
import img3 from '../../../assets/imgs/house.png'

export const Images = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const slider = useRef();
    const items = [
        <Imgg src={img1} />,
        <Imgg src={img2} />,
        <Imgg src={img3} />,
    ]

  return (
    <Container>
        <Wrapper>
            <ImageContainer>
                <Left>
                    <Left.img src={img1} />
                </Left>
                <Right>
                    <Right.Img src={img1} />
                    <Right.Img src={img2} />
                    <Right.Img src={img3} />
                    <Right.Count style ={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}>
                        {/* <Right.Img src={img1} /> */}
                        <Right.Number  onClick={showModal} >+15</Right.Number>
                    </Right.Count>
                </Right>
            </ImageContainer>
            <Modal width={'1000px'} height title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {/* <Cards> */}
                    <AliceCarousel
                        // arrows={false}
                        ref={slider}
                        autoWidth
                        mouseTracking
                        items={items}
                    />
                    <ArrowRight onClick={() => slider.current?.slidePrev()}>
                        &lang;
                    </ArrowRight>
                    <ArrowLeft onClick={() => slider.current?.slideNext()}>
                        &rang;
                    </ArrowLeft>
                {/* </Cards> */}
            </Modal>
        </Wrapper>
    </Container>
  )
}

export default Images