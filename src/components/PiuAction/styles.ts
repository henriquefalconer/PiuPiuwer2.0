import styled from 'styled-components/native';

export interface ActionContainerProps {
    noMargin?: boolean;
}

export interface IconContainerProps {
    verticalIconDisplacement?: number;
    horizontalIconDisplacement?: number;
}

export interface ActionCountProps {
    active: boolean;
}

export const ActionContainer = styled.View<ActionContainerProps>`
    margin: ${props => props.noMargin ? '0' : '5'}px;
    margin-right: ${props => props.noMargin ? '5' : '0'}px;
    flex-direction: row;
    align-items: center;
    width: ${props => props.noMargin ? '20' : '40'}px;
`;

export const IconContainer = styled.View<IconContainerProps>`
    top: ${props => props.verticalIconDisplacement}px;
    left: ${props => props.horizontalIconDisplacement}px;
`;

export const ActionCount = styled.Text<ActionCountProps>`
    margin-left: 5px;
    color: ${props => props.active ? 'white' : '#aaa'};
    font-size: 14px;
    font-weight: ${props => props.active ? 'bold' : 'normal'};
`;