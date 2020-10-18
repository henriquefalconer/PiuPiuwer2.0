import React from 'react';

import usePius from '../../hooks/usePius';

import PiuAction from '../PiuAction';

import PiuData from '../../interfaces/PiuData';

import IconType from '../../utils/IconType';

import { Container } from './styles';

interface PiuActionsAreaProps {
    piuData: PiuData;
}

const PiuActionsArea: React.FC<PiuActionsAreaProps> = ({ piuData }) => {
    const {
        loggedUserData,
        likePiu,
        favoritePiu,
        deletePiu
    } = usePius();

    const {
        id: piuId,
        usuario,
        likers,
        favoritado_por
    } = piuData;

    const likersIds = likers.map(user => user.id);
    const favoritosIds = favoritado_por.map(user => user.id);

    return (
        <Container>
            <PiuAction
                iconType={IconType.Ionicons}
                iconName='ios-heart'
                size={19}
                actionCount={likersIds.length}
                active={likersIds.includes(loggedUserData.id)}
                onPress={async () => await likePiu(piuId)}
            />
            <PiuAction
                noMargin={true}
                iconType={IconType.Ionicons}
                iconName='ios-star'
                size={20}
                verticalIconDisplacement={3}
                active={favoritosIds.includes(loggedUserData.id)}
                onPress={async () => await favoritePiu(piuId)}
            />
            <PiuAction
                noMargin={true}
                iconType={IconType.Ionicons}
                iconName='md-trash'
                size={22.5}
                active={false}
                onPress={async () => await deletePiu(piuId)}
            />
        </Container>
    );
}

export default PiuActionsArea;