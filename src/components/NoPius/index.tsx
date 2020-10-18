import React from 'react';

import { NoPiusContainer, NoPiusImage, NoPiusText } from './styles';

const NoPius: React.FC = () => {
    return (
        <NoPiusContainer>
            <NoPiusImage />
            <NoPiusText>
                Sem mais pius...
            </NoPiusText>
        </NoPiusContainer>
    );
}

export default NoPius;