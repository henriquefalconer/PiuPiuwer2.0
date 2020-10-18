import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const DismissableKeyboardView = styled.ScrollView.attrs({
    contentContainerStyle: { flexGrow: 1 },
    keyboardShouldPersistTaps: 'handled',
    scrollEnabled: false
})``;

export const MultiplatformKeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS == 'ios' ? 'padding' : 'height'
})`
    flex: 1;
    align-self: stretch;
`;