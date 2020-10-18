import styled, { css } from 'styled-components/native';
import LeftArrow from '../../assets/icons/LeftArrow.png';

export interface ContainerProps {
    transparent?: boolean;
}

export const Container = styled.View<ContainerProps>`
    align-self: stretch; 
    align-items: center;
    background-color: ${props => props.transparent ? 'transparent' : '#303030'};
    position: relative;
    ${
        props => !props.transparent && css`
            border-bottom-width: 1px;
            border-bottom-color: #505050;
        `
    }
`;

export const GoBackButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    height: 100%;
    justify-content: center;
`;

export const GoBackImage = styled.Image.attrs({
    source: LeftArrow,
    resizeMode: 'contain'
})`
    height: 20px;
    width: 20px;
`;