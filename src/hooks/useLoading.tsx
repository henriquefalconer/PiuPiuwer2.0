import React, { createContext, useContext, useState } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

interface LoadingContextData {
    isLoading: boolean;
    setIsLoading(isLoading: boolean): void;
}

const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

export const LoadingProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
            <Modal
                visible={isLoading}
                transparent
            >
                <View
                    style={{ flex: 1, justifyContent: 'center' }}
                >
                    <ActivityIndicator size='large' />
                </View>
            </Modal>
        </LoadingContext.Provider>
    );
};

const useLoading = () => useContext(LoadingContext);

export default useLoading;
