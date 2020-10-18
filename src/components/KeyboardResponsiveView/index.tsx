import React from 'react';

import { MultiplatformKeyboardAvoidingView, DismissableKeyboardView } from './styles';

const KeyboardResponsiveView: React.FC = ({ children }) => {
    return (
        <MultiplatformKeyboardAvoidingView>
            <DismissableKeyboardView>
                {children}
            </DismissableKeyboardView>
        </MultiplatformKeyboardAvoidingView>
    );
}

export default KeyboardResponsiveView;