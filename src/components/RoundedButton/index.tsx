import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Button, ButtonText } from './styles';

interface RoudedButtonProps extends TouchableOpacityProps {
    text: string;
    width?: number;
}

const RoundedButton: React.FC<RoudedButtonProps> = ({ text, width, ...rest }) => {
  return (
    <Button width={width} {...rest} >
        <ButtonText>{text}</ButtonText>
    </Button>
  );
}

export default RoundedButton;