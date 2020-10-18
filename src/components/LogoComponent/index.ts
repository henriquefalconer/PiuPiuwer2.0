import styled from 'styled-components/native';

import Logo from '../../assets/images/Logo.png';

interface LogoComponentProps {
    size?: number;
}

const LogoComponent = styled.Image.attrs({
    source: Logo,
    resizeMode: 'contain'
})<LogoComponentProps>`
    height: ${props => props.size || 100}px;
    width: ${props => props.size || 100}px;
    margin: ${props => (props.size || 100) * .3}px;
`;

export default LogoComponent;