import styled from 'styled-components';

const getType = (type) => {
    switch(type) {
        case 'secondary':
            return{
                border: '1px solid #e6e9ec',
                color: '#0D263B',
            };
        case 'primary':
            return {
                background: '#0061DF',
                color: '#FFFFFF',
                border: 'none',
            };
        default:
            return {
                border: '1px solid #E6E9EC',
                color: '#FFFFFF',
            };
    }
};

const Container = styled.div`
    display: flex;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-style: 14px;
    line-height: 20px;

    justify-content: center;
    align-items: center;
    height: ${({ height }) => height || '44px'};
    min-width: ${({ width }) => (width ? width : '100%')};
    width: ${({ width }) => (width ? width : '100%')};
    border-radius: 2px;
    margin-right: ${({ mr }) => `${mr}px`};
    margin-left: ${({ ml }) => `${ml}px`};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    cursor: pointer;

    -webkit-touch-callout: none; // iOS Safari
    -webkit-user-select: none; // Safari
    -khtml-user-select: none; // Konqueror HTML
    -moz-user-select: none; // Old versions of Firefox
    -ms-user-select: none; // Internet Explorer/Edge
    user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */
    ${({ type }) => getType(type)}
    :active{
        transform: scale(0.98);
        opacity: 0.7;
    }
    @media (max-width: 768px) {
        height: ${({ children }) => children && '40px'};
        min-width: ${({ children }) => (children ==='Read more' ? '100px' : '100%')};
        width: ${({ children }) => (children ==='Read more' ? '120px' : '100%')};
    }
`;

export { Container }