import styled from 'styled-components'
import {ReactComponent as share} from '../../../assets/icons/share.svg'
import {ReactComponent as heart} from '../../../assets/icons/heart.svg'
import {ReactComponent as bed} from '../../../assets/icons/bed.svg'
import {ReactComponent as bath} from '../../../assets/icons/bath.svg'
import {ReactComponent as garage} from '../../../assets/icons/car.svg'
import {ReactComponent as ruler} from '../../../assets/icons/ruler.svg'
import {ReactComponent as calendar} from '../../../assets/icons/calendar.svg'
import {ReactComponent as download} from '../../../assets/icons/download.svg'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;
`;

const Wrapper = styled.div`
    display: flex;
    max-width: 1440px;
    padding: 0 135px;
    width: 100%;
    gap: 20px;
`;

const Left = styled.div`
    width: 100%;
`;

Left.Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${({mt}) => mt && `${mt}px`};
    margin-bottom: ${({mb}) => mb && `${mb}px`};
`;

Left.Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #0D263B;
`;

Left.Icons = styled.div`
    display: flex;
    align-items: center;
`;

Left.Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background: #F6F8F9;
    border-radius: 60px;
    margin-left: 26px;
`;

Left.Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
    margin-top: 8px;
    margin-bottom: 20px;
`;

Left.SubDescription = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-decoration-line: line-through;
    color: #696969;
    margin-top: 8px;
    margin-right: 8px;
`;

Left.Share = styled(share)``
Left.Heart = styled(heart)``
Left.Bed = styled(bed)``
Left.Bath = styled(bath)``
Left.Garage = styled(garage)``
Left.Ruler = styled(ruler)``
Left.Calendar = styled(calendar)``

Left.Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    margin-left: 10px;
`;

Left.Subtitle = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #0D263B;
    margin-bottom: 16ox;
    margin-top: 50px;

`

Left.ShowMore = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    color: #0061DF;
`

Left.DownloadIcon = styled(download)`
cursor: pointer;
`
Left.DownloadText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #696969;
    margin: 0 18px 0 8px;
    cursor: pointer;
`

Left.Download = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    text-decoration-line: underline;
    text-transform: uppercase;
    cursor: pointer;
    color: #0061DF;
`

Left.Line = styled.hr`
`

const Right = styled.div`
    width: 330px;
`;

export { Container, Wrapper, Left, Right }