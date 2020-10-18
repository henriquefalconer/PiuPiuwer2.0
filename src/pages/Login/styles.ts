import styled from 'styled-components/native';

export const AppDescriptionView = styled.View`
    align-self: stretch;
`;

export const AppDescription = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: white;
    align-self: stretch;
    margin-bottom: 10px;
`;

export const LoginInput = styled.TextInput.attrs({
    placeholderTextColor: '#909090',
    autoCapitalize: 'none',
    autoCorrect: false
})`
    background-color: #333333;
    height: 45px;
    margin: 10px 0;
    align-self: stretch;
    border-bottom-width: 1.5px;
    border-bottom-color: white;
    font-size: 16px;
    font-weight: 500;
    padding: 1px 5px;
    color: white;
`;

export const ErrorArea = styled.View`
    justify-content: center; 
    height: 30px;
`;

export const ErrorText = styled.Text`
    color: red;
`;