import React from 'react';

import { useNavigation } from '@react-navigation/native';

import LogoComponent from '../LogoComponent';

import { Container, GoBackButton, GoBackImage, ContainerProps } from './styles';

interface HeaderProps extends ContainerProps {
    goBackActive?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent, goBackActive=false }) => {

    const { goBack } = useNavigation();

    return (
        <Container transparent={transparent} >
            {
                goBackActive && (
                    <GoBackButton onPress={goBack} >
                        <GoBackImage />
                    </GoBackButton>
                )
            }
            <LogoComponent size={25} />
        </Container>
    )
}

export default Header;