import styled from 'styled-components';
import {ReactComponent as bed} from '../../../assets/icons/bed.svg';
import {ReactComponent as bath} from '../../../assets/icons/bath.svg';
import {ReactComponent as car} from '../../../assets/icons/car.svg';
import {ReactComponent as ruler} from '../../../assets/icons/ruler.svg';
const Container = styled.div`

`
const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
`;

const Subtitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin: 8px 0 32px 0;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 12px;
    cursor: pointer;
`;

Box.Bed = styled(bed)`
    width: 20px;
    height: 20px;
`;

Box.Bath = styled(bath)`
    width: 20px;
    height: 20px;
`;

Box.Car = styled(car)`
    width: 20px;
    height: 20px;
`;

Box.Ruler = styled(ruler)`
    width: 20px;
    height: 20px;
`;

Box.Desc = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-top: 6.7px;
`

const Price = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 24px 0 50px 0;
`

export { Container, Title, Subtitle, Wrapper, Box, Price}