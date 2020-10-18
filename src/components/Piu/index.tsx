import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import PiuData from '../../interfaces/PiuData';

import getRelativeTime from '../../utils/getRelativeTime';
import PiuActionsArea from '../PiuActionsArea';

import {
    PiuContainer,
    PhotoButton,
    Photo,
    MainPiuArea,
    UserDataArea,
    BoldText,
    NormalText,
    DotSeparator,
    PiuTextArea
} from './styles';

interface PiuProps {
    piuData: PiuData;
    onPressUser?(userId: number): void;
}

const Piu: React.FC<PiuProps> = ({ piuData, onPressUser=() => {} }) => {

    const {
        texto,
        horario,
        usuario
    } = piuData;

    const {
        id: userId,
        username,
        foto
    } = usuario;
    
    const relativeTime = getRelativeTime(horario);

    return (
        <PiuContainer>
            <PhotoButton
                onPress={() => onPressUser(userId)}
            >
                <Photo source={{ uri: foto }} />
            </PhotoButton>
            <MainPiuArea>
                <UserDataArea>
                    <TouchableOpacity
                        onPress={() => onPressUser(userId)}
                    >
                        <BoldText>@{username}</BoldText>
                    </TouchableOpacity>
                    <DotSeparator />
                    <NormalText>{relativeTime}</NormalText>
                </UserDataArea>
                <PiuTextArea>
                    <NormalText>{texto}</NormalText>
                    <PiuActionsArea piuData={piuData} />
                </PiuTextArea>
            </MainPiuArea>
        </PiuContainer>
    );
};

export default Piu;