import styled from 'styled-components/native';

import NoPius from '../../assets/images/NoPius.png';

export const NoPiusContainer = styled.View`
    height: 120px;
    padding-bottom: 15px;
    justify-content: center;
    align-items: center;
`;

export const NoPiusText = styled.Text`
    color: #888;
    font-size: 16px;
`;

export const NoPiusImage = styled.Image.attrs({
    source: NoPius
})`
    height: 50px;
    width: 50px;
`;