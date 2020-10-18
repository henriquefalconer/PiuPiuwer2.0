import styled from 'styled-components/native';

interface CentralizedViewProps {
    flex?: number;
}

const CentralizedView = styled.View<CentralizedViewProps>`
    justify-content: center;
    align-items: center;
    align-self: stretch;
    flex: ${props => props.flex === undefined ? 1 : props.flex};
`;

export default CentralizedView;