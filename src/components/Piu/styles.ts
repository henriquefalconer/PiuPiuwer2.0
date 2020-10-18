import styled from 'styled-components/native';

export const PiuContainer = styled.View`
    padding: 8px;
    padding-bottom: 0;
    background-color: #303030;
    margin-bottom: 8px;
    flex-direction: row;
`;

export const PhotoButton = styled.TouchableOpacity`
    width: 55px;
    height: 55px;
    border-radius: 22.5px;
    padding: 0;
    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 49px;
    height: 49px;
    border-radius: 24.5px;
    background-color: #ddd;
`;

export const MainPiuArea = styled.View`
    margin-left: 10px;
    flex: 1;
`;

export const UserDataArea = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 2px;
`;

export const BoldText = styled.Text`
    font-weight: bold;
    font-size: 15px;
    color: white;
`;

export const NormalText = styled.Text`
    font-size: 15px;
    color: white;
`;

export const DotSeparator = styled.View`
    background-color: #C4C4C4;
    height: 5px;
    width: 5px;
    border-radius: 2.5px;
    margin: 0 8px;
`;

export const PiuTextArea = styled.View`
    margin-right: 10px;
`;