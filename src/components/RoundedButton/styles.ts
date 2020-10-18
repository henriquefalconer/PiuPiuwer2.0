import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
    width: number | undefined;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: white;
    border-radius: 25px;
    width: ${props => props.width || 230}px;
    height: 47.5px;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    opacity: ${props => props.disabled ? .4 : 1};
`;

export const ButtonText = styled.Text`
    text-align: center;
    color: #505050;
    font-size: 20px;
    font-weight: bold;
`;