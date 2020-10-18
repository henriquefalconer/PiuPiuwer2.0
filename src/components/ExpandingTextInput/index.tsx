import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputContentSizeChangeEventData, TextInputProps } from 'react-native';

interface ExpandingTextInputProps extends TextInputProps {
    minHeight?: number;
    onContentSizeChange?(event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>): void;
}

const ExpandingTextInput: React.FC<ExpandingTextInputProps> = ({ onContentSizeChange=() => {}, minHeight=0, ...rest }) => {
    const [height, changeHeight] = useState(0);
    
    return (
        <TextInput 
            {...rest}
            multiline={true}
            onContentSizeChange={
                (event) => {
                    if (event && event.nativeEvent && event.nativeEvent.contentSize) {
                      changeHeight(event.nativeEvent.contentSize.height);
                    }
                    onContentSizeChange && onContentSizeChange(event)
                }
            }
            style={{
                ...(rest.style as object),
                height: height > minHeight ? height : minHeight
            }}
            autoFocus
        />
    );
}

export default ExpandingTextInput;